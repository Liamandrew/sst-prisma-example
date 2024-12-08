import { vpc } from "./vpc";

export const rds = new sst.aws.Postgres("MyPostgres", { vpc });

export const DATABASE_URL = $interpolate`postgresql://${rds.username}:${rds.password}@${rds.host}:${rds.port}/${rds.database}`;

new sst.x.DevCommand("Prisma", {
  environment: { DATABASE_URL },
  dev: {
    autostart: false,
    command: "npx prisma studio",
  },
});
