import { GraphQLNonNull, GraphQLString } from "graphql"
import { UUIDType } from "../types/uuid.type.js"

export const DeleteUser = {
  type: new GraphQLNonNull(GraphQLString),
  args: {
    id: { type: new GraphQLNonNull(UUIDType) }
  },
  resolve: async (_parent, args, context) => {
    await context.prisma.user.delete({
      where: { id: args.id },
    });
  }
}
