import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;
  const ENV = process.env.NODE_ENV || "development";

  console.log(`[Server] Starting in ${ENV} mode...`);
  console.log(`[Server] Directory: ${__dirname}`);

  // API Route to fetch local gallery images
  app.get("/api/gallery", (req, res) => {
    const galleryDir = path.join(__dirname, "public", "assets", "images", "galeria");
    
    try {
      if (!fs.existsSync(galleryDir)) {
        return res.json({ resources: [] });
      }

      const files = fs.readdirSync(galleryDir);
      const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
      const images = files
        .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
        .map(file => ({
          public_id: file,
          secure_url: `/assets/images/galeria/${file}`,
          created_at: fs.statSync(path.join(galleryDir, file)).birthtime
        }));

      images.sort((a, b) => b.created_at.getTime() - a.created_at.getTime());
      res.json({ resources: images });
    } catch (error) {
      console.error("Error reading local gallery:", error);
      res.status(500).json({ error: "Failed to fetch local gallery images" });
    }
  });

  // Serve static files from the public folder
  app.use("/assets", express.static(path.join(__dirname, "public", "assets")));

  const distPath = path.join(__dirname, "dist");
  const isProduction = ENV === "production" || fs.existsSync(distPath);

  if (!isProduction) {
    console.log("[Server] Using Vite middleware (Development)");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log(`[Server] Serving static files from: ${distPath}`);
    app.use(express.static(distPath));
    
    app.get("*", (req, res) => {
      const indexPath = path.join(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send("Erro: Pasta 'dist' encontrada, mas 'index.html' não existe. Verifique se rodou 'npm run build'.");
      }
    });
  }

  app.listen(PORT, () => {
    console.log(`[Server] Ready on port ${PORT}`);
  });
}

startServer();
