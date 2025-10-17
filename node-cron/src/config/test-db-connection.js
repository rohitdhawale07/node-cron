import AppDataSource from './db.js';

(async () => {
    try {
        await AppDataSource.initialize();
        console.log('✅ Database connected successfully!');
        await AppDataSource.destroy();  // Close connection gracefully
    } catch (error) {
        console.error('❌ Database connection failed:', error);
    }
})();
