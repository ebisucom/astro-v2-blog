---
title: unist-util-visitを使ってimgを走査する方法
slug: visit-traverse-images
pubDate: '2023-02-12'
image: /assets/unist-util-visit.jpg
category:
  - javascript
description: Node.js で画像を走査する方法:「unist-util-visit」パッケージでDOMノードを歩き回り、特定の画像タグにアクセス出来ます。サンプルコード付き！
---

Node.js で画像を走査するには、unist-util-visit パッケージを利用します。

unist-util-visit を使うことで、単純なツリープラグラムを使って DOM ノードを歩き回ることができます。

特定の画像タグにアクセスするためのサンプルコードを以下に示します。この簡素なコード例は、URL から画像へのパスを取得します。

```javascript
const visit = require('unist-util-visit');
const path = require('path');
const fileUrl = 'http://example.com/assets/images/sample.jpg';
const ast = {
	type: 'root',
	children: [
		{
			type: 'element',
			tagName: 'img',
			properties: { src: fileUrl },
			children: [],
		},
	],
};
visit(ast, 'element', (node) => {
	if (node.tagName === 'img' && node.properties.src) {
		console.log(path.basename(node.properties.src));
	}
});
```

実行すると sample.jpg が出力されます。 unist-util-visit を使えば、画像の走査を簡単に実装できます。
また、特定の属性にアクセスしたり、すべての img タグを回すことも可能です。 DOM ノードを歩くプログラミングは、非常に高い柔軟性を提供し、単純かつ簡単に操作できます。 unist-util-visit を使うことで、Node.js アプリケーションで画像の処理を簡単に行うことができます。
