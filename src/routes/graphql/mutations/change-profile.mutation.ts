import { GraphQLNonNull } from "graphql";
import { UUIDType } from "../types/uuid.type.js";
import { ChangeProfileInput } from "../inputs/change-profile.input.js";
import { ProfileType } from "../types/profile.type.js";

export const ChangeProfile = {
  type: ProfileType,
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
    dto: { type: new GraphQLNonNull(ChangeProfileInput) },
  },
  resolve: async (_parent, args, context) => {
    return context.prisma.profile.update({
      where: { id: args.id },
      data: args.dto,
    })
  }
}