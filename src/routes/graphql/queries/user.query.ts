import { GraphQLNonNull } from "graphql";
import { UserType } from "../types/user.type.js";
import { UUIDType } from "../types/uuid.type.js";

export const UserQuery = {
  type: UserType,
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: async (_parent, args, context) => {
    const { prisma } = context;
    const { id } = args;
    return await prisma.user.findUnique({
      where: { id },
      include: {
        profile: {
          include: {
            memberType: true,
          },
        },
        posts: true,
        userSubscribedTo: true,
        subscribedToUser: true,
      },
    });
  },
}