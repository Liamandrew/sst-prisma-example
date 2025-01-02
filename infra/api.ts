import { vpc } from "./vpc";
import { DATABASE_URL, rds } from "./database";

export const api = new sst.aws.Function("MyApi", {
  vpc,
  url: true,
  link: [rds],
  handler: "apps/api/src/main.handler",
  copyFiles: [
    {
      from: "node_modules/.prisma/client/",
    },
  ],
  environment: {
    DATABASE_URL,
  },
});
