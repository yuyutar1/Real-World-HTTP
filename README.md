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

``` bash
curl --http1.0 -G --data-urlencode "search word" http://localhost:18888

GET /?search%20word
{
  host: "localhost:18888",
  "user-agent": "curl/7.76.1",
  accept: "*/*",
}
```