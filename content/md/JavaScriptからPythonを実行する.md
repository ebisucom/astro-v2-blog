---
title: JavaScriptからPythonを実行する
slug: js-execute-python
pubDate: '2023-01-22'
image: /assets/python.jpg
category:
  - python
  - javascript
description: Node.js製のpython-shellモジュールを使うことで、JavaScriptからPythonへのデータの送受信が可能に。Pythonスクリプトを実行し、結果を受け取る方法も解説します。
---

Python を JavaScript から実行するということは、Web サーバー上で Python スクリプトを動かすことが可能となることです。

今回紹介するのは、Node.js 製の「python-shell」と呼ばれるモジュールを使った方法です。

python-shell とは、Node.js アプリケーションから Python スクリプトを実行して結果を得る為のモジュールです。
Node.js を使えば、JavaScript コードから Python へのデータ送信や、Python からのデータ受信が容易に行えます。
python-shell を使って Python スクリプトを実行する方法は非常に簡単です。まず、Node.js と python-shell をインストールします。Node.js と python-shell をインストールしたら、次のようなコード上で Python スクリプトを実行できます。

```javascript
const PythonShell = require('python-shell'); // Pythonスクリプトを実行する
const options = { scriptPath: '/path/to/python/scripts/' };
const pyshell = new PythonShell('my_python_script.py', options); // Pythonスクリプトへの入力を設定
pyshell.send('Hello World!'); // データ受信時の処理
pyshell.on('message', function (message) {
	// 受信したデータを処理
	console.log(message);
}); // 終了時の処理
pyshell.end(function (err) {
	if (err) {
		throw err;
	}
	console.log('finished');
});
```

上記のようにすると、Node.js アプリケーションから Python スクリプトを実行して結果を受け取ることができます。あとは、my_python_script.py に記述されたスクリプトの中身によって処理内容が変わります。

例えば、以下のような Python スクリプトを作成すると、Node.js 側から送信した文字列を受信して、そのまま返す処理を実行できます。

```python
# -*- coding: utf-8 -*-
import sys # 入力を受け取る
input_string = sys.stdin.readline() # 入力をそのまま出力する print(input_string)
```

python-shell を使えば、Node.js アプリケーションから Python スクリプトを実行し、その結果を受け取ることが可能となります。また、Python スクリプトへの入力も設定可能です。その結果、Node.js から Python へのデータの送受信が容易に行えます。

今回も Python を JavaScript から実行する方法として、Node.js 製の python-shell モジュールを使う方法を紹介しました。python-shell を使えば、Node.js から Python へのデータ送信や、Python からのデータ受信などが簡単に行えます。Node.js 製のモジュールは、他にいくつも存在しますので、色々な用途に使ってみてください。
