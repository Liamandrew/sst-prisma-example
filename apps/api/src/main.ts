import { Handler } from "aws-lambda";

import { prisma } from "@repo/database";

export const handler: Handler = async (event) => {
  const user = await prisma.user.findUnique({
    where: {
      email: "tim@apple.com",
    },
  });

  if (!user) {
    return {
      statusCode: 404,
      body: "User not found",
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(user),
  };
};
