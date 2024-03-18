import { and, eq, sql } from "drizzle-orm";
import { db, sessions } from "./db";

const loadSessionFromDb = async (sessionId: string, key: string) => {
  return await db
    .select({ count: sql<number>`count(*)` })
    .from(sessions)
    .where(and(eq(sessions.id, sessionId), eq(sessions.key, key)))
    .limit(1);
};

export const doesntMatterHere = async () => {
  return true;
};
