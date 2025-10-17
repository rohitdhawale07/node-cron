/**
 * Register application routes.
 * @param {import('express').Express} app
 */

const setupRoutes = (app) => {
    /**
     * Health check route
     */
    app.get('/health', (req, res) => {
        res.json({ status: 'ok', timestamp: new Date().toISOString() });
    });
};

export default setupRoutes;
