import { GraphQLNonNull } from "graphql";
import { UUIDType } from "../types/uuid.type.js";
import { UserType } from "../types/user.type.js";
import { ChangeUserInput } from "../inputs/change-user.input.js";

export const ChangeUser = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(UUIDType) },
    dto: { type: new GraphQLNonNull(ChangeUserInput) }
  },
  resolve: async (_parent, args, context) => {
    return context.prisma.user.update({
      where: { id: args.id },
      data: args.dto,
    })
  }
}