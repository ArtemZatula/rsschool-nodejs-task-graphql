import { GraphQLNonNull } from "graphql";
import { ProfileType } from "../types/profile.type.js";
import { UUIDType } from "../types/uuid.type.js";

export const ProfileQuery = {
  type: ProfileType,
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: async (_parent, args, context) => {
    const { id } = args;
    return await context.prisma.profile.findUnique({
      where: { id },
    });
  }
}