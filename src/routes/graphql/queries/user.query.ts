import { GraphQLNonNull } from "graphql";
import { UserType } from "../types/user.type.js";
import { UUIDType } from "../types/uuid.type.js";

export const UserQuery = {
  type: UserType,
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: async (_parent, args, context) => {
    const { prisma } = context;
    const { id } = args;
    try {
      const user = await prisma.user.findUnique({
        where: { id },
      });
      if (user === null) {
        // throw httpErrors.notFound();
      }
      return user;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  },
}