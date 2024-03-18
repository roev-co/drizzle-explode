"use client";

import { foo } from "./actions";

export function ClientCmp() {
  void foo().then(() => console.log("ok"));
  return "ClientCmp";
}
