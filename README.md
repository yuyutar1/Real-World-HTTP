# real-world-http

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.26. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## curl

```bash
curl --http1.0 http://localhost:18888

GET /
{
  host: "localhost:18888",
  "user-agent": "curl/7.76.1",
  accept: "*/*",
}
```

```bash
curl --http1.0 -G --data-urlencode "search word" http://localhost:18888

GET /?search%20word
{
  host: "localhost:18888",
  "user-agent": "curl/7.76.1",
  accept: "*/*",
}
```

```bash
curl -v --http1.0 http://localhost:18888

*   Trying ::1:18888...
* Connected to localhost (::1) port 18888 (#0)
> GET / HTTP/1.0
> Host: localhost:18888
> User-Agent: curl/7.76.1
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Content-Type: text/html
< Date: Sat, 02 Mar 2024 16:42:25 GMT
< Content-Length: 32
<
<html><body>hello</body></html>
* Connection #0 to host localhost left intact

GET /
{
  host: "localhost:18888",
  "user-agent": "curl/7.76.1",
  accept: "*/*",
}
```

```bash
curl --http1.0 -H "X-Test: Hello" http://localhost:18888

GET /
{
  host: "localhost:18888",
  "user-agent": "curl/7.76.1",
  accept: "*/*",
  "x-test": "Hello",
}
```

## HTTP/0.9

- 1 つの document のみ送る
- 通信内容は HTML 文書の前提
- 検索のリクエスト以外送信不可

## header の分類

- 対象
  - 一般ヘッダ（req,res 両方適用）
  - entity ヘッダ（送受信されるコンテンツに適用）
  - req ヘッダ
  - res ヘッダ
- 送信経路での取り扱い
  - endToEnd ヘッダ（最終受取者に渡される）
  - hopByHop ヘッダ（通信経路に対する指示で、経路が変わったら削除される）
- X-から始まるヘッダ
  - 各アプリが自由に使っても良いとされる
  - 現在はなるべく減らそうの動き
