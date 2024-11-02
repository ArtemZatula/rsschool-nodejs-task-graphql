import { GraphQLList, GraphQLNonNull } from "graphql";
import { ProfileType } from "../types/profile.js";

export const ProfilesQuery = {
  type: new GraphQLList(new GraphQLNonNull(ProfileType)),
  resolve: async (_parent, _args, context) => {
    try {
      return await context.prisma.profile.findMany();
    } catch (error) {
      throw new Error("Failed to fetch profiles");
    }
  }
}
