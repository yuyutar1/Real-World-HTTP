import { createServer, IncomingMessage, ServerResponse } from "http";

// リクエストハンドラ関数に型を適用
function handler(req: IncomingMessage, res: ServerResponse) {
  const { method, url, headers } = req;
  console.log(`${method} ${url}`);
  console.log(headers);

  // 簡単なHTMLレスポンスを送信
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<html><body>hello</body></html>\n');
}

// サーバーを作成し、ポート18888でリッスン
const server = createServer(handler);
server.listen(18888, () => {
  console.log("start http listening : 18888");
});
