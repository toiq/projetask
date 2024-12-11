"use server";
import "server-only";
import { Client, Account } from "node-appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_KEY, PROJECT_ID } from "@/config/env";

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(PROJECT_ID)
    .setKey(APPWRITE_KEY);

  return {
    get account() {
      return new Account(client);
    },
  };
}
