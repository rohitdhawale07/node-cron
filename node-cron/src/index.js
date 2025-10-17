import express from 'express';
import config from './config/cronConfig.js';
import setupRoutes from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import { startAllCronJobs } from './cron/index.js';

const app = express();

// Middlewares
app.use(express.json());

// Routes
setupRoutes(app);

app.get('/', (req, res) => {
    res.json({ message: "Welcome to Node Cron" });
});

// Error handler (should come after routes)
app.use(errorHandler);

// start cron jobs
startAllCronJobs();

// Start server
app.listen(config.port, () => {
    console.log(`🚀 Server running on http://localhost:${config.port} [${config.env}]`);
});
