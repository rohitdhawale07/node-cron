import cron from 'node-cron';
import cronConfig from '../config/cronConfig.js';
import { jobALogic } from '../jobs/jobA.js';

/**
 * Schedule Job A with the configured cron expression.
 */
export const scheduleJobA = () => {
    cron.schedule(cronConfig.cronJobA, () => {
        jobALogic();
    });
};
