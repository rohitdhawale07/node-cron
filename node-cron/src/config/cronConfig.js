// src/config/index.js

import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

// Define the schema for environment variables
const envSchema = z.object({
    PORT: z
        .string()
        .optional()
        .transform((val) => parseInt(val || '3000', 10)),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    CRON_JOB_A: z.string().default('*/5 * * * * *'),   // every 5 seconds
    CRON_JOB_B: z.string().default('*/10 * * * * *'),  // every 10 seconds
});

// Validate and parse env vars
const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
    console.error('❌ Invalid environment variables:', parsedEnv.error.format());
    process.exit(1); // Stop the app
}

const env = parsedEnv.data;

/**
 * App configuration loaded from validated environment variables.
 * @type {{ port: number, env: string, cronExpression: string }}
 */
const config = {
    port: env.PORT,
    env: env.NODE_ENV,
    cronJobA: env.CRON_JOB_A,
    cronJobB: env.CRON_JOB_B,
};

export default config;
