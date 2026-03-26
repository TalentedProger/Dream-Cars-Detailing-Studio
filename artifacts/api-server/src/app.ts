import express, { type Express } from "express";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import path from "path";
import router from "./routes";

const app: Express = express();

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

// In production, serve the frontend static files and handle SPA fallback
if (process.env.NODE_ENV === "production") {
  const publicDir = path.resolve(__dirname, "public");
  app.use(express.static(publicDir, { maxAge: "1y", immutable: true }));
  // SPA fallback: serve index.html for any non-API route
  app.get("*", (_req, res) => {
    res.sendFile(path.join(publicDir, "index.html"));
  });
}

export default app;
