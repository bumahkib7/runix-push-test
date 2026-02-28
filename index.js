const http = require("http");

const PORT = process.env.PORT || 3000;
const VERSION = "v2";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    version: VERSION,
    message: "Push-to-deploy works! Auto-rebuilt from GitHub webhook.",
    timestamp: new Date().toISOString(),
    features: ["auto-deploy", "webhook-triggered", "zero-downtime"],
  }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} — ${VERSION}`);
});
