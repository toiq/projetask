import { hc } from "hono/client";
import { AppType } from "@/app/api/[[...route]]/route";
import { APP_URL } from "@/config/env";

export const client = hc<AppType>(APP_URL);
