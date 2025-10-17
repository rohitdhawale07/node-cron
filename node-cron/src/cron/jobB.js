import cron from 'node-cron';
import cronConfig from '../config/cronConfig.js';
import { jobBLogic } from '../jobs/jobB.js';

/**
 * Schedule Job B with the configured cron expression.
 */
export const scheduleJobB = () => {
    cron.schedule(cronConfig.cronJobB, () => {
        jobBLogic();
    });
};
