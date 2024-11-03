import { GraphQLList, GraphQLNonNull } from "graphql";
import { UserType } from "../types/user.type.js";

export const UsersQuery = {
  type: new GraphQLList(new GraphQLNonNull(UserType)),
  resolve: async (_parent, _args, context) => {
    try {
      return await context.prisma.user.findMany({
        include: {
          profile: {
            include: {
              memberType: true,
            },
          },
          posts: true,
        }
      });
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  },
};