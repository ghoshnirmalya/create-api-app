import express from "express";

const app = express();
const defaultPort = 8080;
const PORT = process.env.PORT || defaultPort;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

app.get("/api", (req, res) => {
  const path = `/api/item`;

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;

  res.end(`Item: ${slug}`);
});
