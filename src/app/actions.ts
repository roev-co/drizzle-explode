"use server";

import { doesntMatterHere } from "@/auth";

export async function foo() {
  await doesntMatterHere();
  return true;
}
