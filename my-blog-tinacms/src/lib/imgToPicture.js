import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

import { getPicture } from '@astrojs/image';
import { getPlaiceholder } from 'plaiceholder';

const pictureDefault = {
	widths: [640, 750, 828, 1080, 1200, 1920],
	sizes: '(min-width: 720px) 720px, 100vw',
	formats: ['webp', 'jpeg'],
};

export default async function imgToPicture(html) {
	// HTMLをhastへ変換
	const hast = unified().use(rehypeParse, { fragment: true }).parse(html);

	// img ノードを抽出
	let imageNodesSet = [];
	visit(hast, 'element', (node, index, parent) => {
		if (node.tagName === 'img') {
			imageNodesSet.push({ node, index, parent });
		}
	});

	// 抽出したimgノードに対する処理
	const promises = imageNodesSet.map(async (nodeSet) => {
		// imgノードから、srcとaltを取得
		const {
			node: {
				properties: { src, alt },
			},
			index,
			parent,
		} = nodeSet;

		// 画像のwidth&heightを取得
		const { img } = await getPlaiceholder(src);
		const { width, height } = img;

		// 取得した情報をもとに、getPictureでpictureの構成要素を取得
		const pictureData = await getPicture({
			...img,
			...pictureDefault,
			aspectRatio: `${width}:${height}`,
		});

		// 置換用のnodeの作成
		const srcNodes = pictureData.sources.map((source) => {
			const e = h('source', { ...source });
			return e;
		});

		const imgNode = h('img', { ...pictureData.image, alt });

		const pictureNode = h('picture', [...srcNodes, imgNode]);

		// pictureノードに置換
		parent.children.splice(index, 1, pictureNode);
	});

	await Promise.all(promises);

	// hastをhtmlに戻す
	const newhtml = unified().use(rehypeStringify).stringify(hast);

	return newhtml;
}
