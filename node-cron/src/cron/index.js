import { scheduleJobA } from './jobA.js';
import { scheduleJobB } from './jobB.js';

/**
 * Initialize all cron jobs.
 */
export const startAllCronJobs = () => {
    // scheduleJobA();
    // scheduleJobB();
    console.log('✅ All cron jobs scheduled.');
};
