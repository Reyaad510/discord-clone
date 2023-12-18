import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}


// do below for hotreload
// in production would just do export const db = new PrismaClient();
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db