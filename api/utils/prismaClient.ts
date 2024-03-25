// import { PrismaClient } from '@prisma/client';
import {PrismaClient} from '@prisma/client'

// Check if we are in a production environment
const isProd = process.env.NODE_ENV === 'production';

let prisma: PrismaClient;

if (isProd) {
  // If in production, always use a new instance
  prisma = new PrismaClient();
} else {
  // If not in production, check if there is already an instance
  // If not, create one. This ensures that you reuse the
  // same instance during development, which can help with
  // things like hot reloading.
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient({
        log:['query']
    });
  }
  prisma = (global as any).prisma;
}

export default prisma;
