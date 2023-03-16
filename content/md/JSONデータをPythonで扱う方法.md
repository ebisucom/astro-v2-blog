---
title: JSONデータをPythonで扱う方法
slug: json-python
pubDate: '2022-12-09'
image: /assets/python.jpg
category:
  - python
description: PythonでJSONを扱おう！標準ライブラリのjsonモジュールを使う方法をご紹介。入出力の際に必要な関数や、文字列をPythonオブジェクトに変換する方法も詳しく説明
---

Python は広く使われているプログラミング言語であり、JSON データをサポートするための機能が豊富に用意されています。
ネットワークアプリケーション開発でもしばしば使われています。
この記事では、Python を使って JSON データを扱う方法をご紹介します。

## JSON データの入力と出力

Python で JSON データを扱うためには、まず標準の Python ライブラリの json モジュールが必要となります。これは、JSON フォーマットのデータを入力・出力できるようにするモジュールです。json モジュールをインポートしたあと、必要な関数を使って JSON データを取り扱うことができます。 例えば、以下のような JSON データを Python で処理したい場合には、まず以下のように json モジュールをインポートします。

```python
 import json
```

また、入力と出力の際には以下のような関数を使うことができます。

- json.loads(): JSON 形式の文字列を Python オブジェクトに変換する。
- json.dumps(): Python オブジェクトを JSON 形式の文字列に変換する。

## JSON データを読み取る

JSON データを Python のオブジェクトとして取り扱うには、json.loads()関数を使います。これは、JSON 形式の文字列を読み取り、Python オブジェクト（dict、list、str など）に変換します。 例えば、以下のような JSON データを読み取る場合は、以下のようにします。

```json
{
	"title": "PythonでJSONを扱う",
	"content": "JSONをPythonで読み取って処理する方法を紹介します。"
}
```

以下のようにして読み取ります。

```python
 data = json.load(json_data) # json_dataにはJSONデータが格納されている。
```

これで、Python の辞書オブジェクトに変換され、次のように取り扱うことができます。

```python
title = data['title']
content = data['content']
print(title) # "PythonでJSONを扱う"
print(content) # "JSONをPythonで読み取って処理する方法を紹介します。"
```

## JSON データを出力する

JSON データを出力するには、json.dumps()関数を使います。これは、Python のオブジェクト（dict、list、str など）を JSON 形式の文字列に変換します。 前述の例と同じデータを出力する場合は、以下のようにします。

```python
data = { "title": "PythonでJSONを扱う", "content": "JSONをPythonで読み取って処理する方法を紹介します。" }
json_data = json.dumps(data)
```

これで、次のような JSON 形式の文字列に変換されます。

```json
{
	"title": "PythonでJSONを扱う",
	"content": "JSONをPythonで読み取って処理する方法を紹介します。"
}
```

以上で、Python で JSON データを入力・出力する方法を説明しました。本記事を読んでいただければ、Python で JSON データを扱う覚え方がわかるかと思います。ネットワークアプリケーション開発で JSON を用いる際には、是非本記事を参照してみてください。
