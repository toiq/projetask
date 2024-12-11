import { cookies } from "next/headers";
import { Account, Client } from "node-appwrite";
import { AUTH_COOKIE } from "./constants";
import { APPWRITE_ENDPOINT, PROJECT_ID } from "@/config/env";
export const getCurrent = async () => {
  try {
    const client = new Client()
      .setEndpoint(APPWRITE_ENDPOINT)
      .setProject(PROJECT_ID);

    const session = (await cookies()).get(AUTH_COOKIE);

    if (!session) {
      return null;
    }

    client.setSession(session.value);

    const account = new Account(client);

    return await account.get();
  } catch (e) {
    console.log(e);
    return null;
  }
};
