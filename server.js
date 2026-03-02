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
    // 1. API Route for the Gallery
    app.get("/api/gallery", (req, res) => {
        const galleryDir = path.join(__dirname, "public", "assets", "images", "galeria");
        try {
            if (!fs.existsSync(galleryDir))
                return res.json({ resources: [] });
            const files = fs.readdirSync(galleryDir);
            const images = files
                .filter(file => [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(path.extname(file).toLowerCase()))
                .map(file => ({
                public_id: file,
                secure_url: `/assets/images/galeria/${file}`,
                created_at: fs.statSync(path.join(galleryDir, file)).birthtime
            }));
            images.sort((a, b) => b.created_at.getTime() - a.created_at.getTime());
            res.json({ resources: images });
        }
        catch (error) {
            res.status(500).json({ error: "Failed to fetch gallery" });
        }
    });
    // 2. Serve Gallery Images from public folder
    app.use("/assets/images/galeria", express.static(path.join(__dirname, "public", "assets", "images", "galeria")));
    // 3. Serve Site Assets (Production vs Development)
    const distPath = path.join(__dirname, "dist");
    const isProduction = fs.existsSync(distPath);
    if (isProduction) {
        console.log("[Server] Running in PRODUCTION mode");
        app.use(express.static(distPath));
        app.get("*", (req, res) => {
            res.sendFile(path.join(distPath, "index.html"));
        });
    }
    else {
        console.log("[Server] Running in DEVELOPMENT mode");
        const vite = await createViteServer({
            server: { middlewareMode: true },
            appType: "spa",
        });
        app.use(vite.middlewares);
    }
    app.listen(PORT, () => {
        console.log(`[Server] Ready on port ${PORT}`);
    });
}
startServer();
