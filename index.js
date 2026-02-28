const http = require("http");

const PORT = process.env.PORT || 3000;
const VERSION = "v3";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    version: VERSION,
    message: "v3 — webhook-triggered rebuild confirmed",
    timestamp: new Date().toISOString(),
    features: ["auto-deploy", "webhook-triggered", "zero-downtime"],
  }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} — ${VERSION}`);
});
