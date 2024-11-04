import { GraphQLNonNull } from "graphql";
import { ProfileType } from "../types/profile.type.js";
import { CreateProfileInput } from "../inputs/create-profile.input.js";

export const CreateProfile = {
  type: ProfileType,
  args: {
    dto: { type: new GraphQLNonNull(CreateProfileInput) }
  },
  resolve: async (_, args, context) =>
    await context.prisma.profile.create({
      data: args.dto
    }),
}