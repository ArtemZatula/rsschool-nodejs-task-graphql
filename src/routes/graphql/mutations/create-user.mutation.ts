import { GraphQLNonNull } from "graphql";
import { UserType } from "../types/user.type.js";
import { CreateUserInput } from "../inputs/create-user.input.js";

export const CreateUser =  {
  type: UserType,
  args: {
    dto: { type: new GraphQLNonNull(CreateUserInput) }
  },
  resolve: async (_parent, args, context) =>
    await context.prisma.user.create({
      data: args.dto,
    })
}