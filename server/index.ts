import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // Serve static files from public directory
  app.use(express.static('public'));
  
  // Handle tour detail page routes
  app.get('/tour-detail.html', (req, res) => {
    res.sendFile('tour-detail.html', { root: 'public' });
  });
  
  // Handle index page
  app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
  // Catch all routes and redirect to index
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // ALWAYS serve the app on port 5000
  const port = 5000;
  const server = app.listen(port, "0.0.0.0", () => {
    log(`serving static website on port ${port}`);
    log(`visit: http://localhost:${port}`);
  });
})();
