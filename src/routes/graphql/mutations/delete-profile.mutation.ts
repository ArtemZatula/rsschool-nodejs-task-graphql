import { GraphQLNonNull, GraphQLString } from "graphql"
import { UUIDType } from "../types/uuid.type.js"

export const DeleteProfile = {
  type: GraphQLString,
  args: {
    id: { type: new GraphQLNonNull(UUIDType) }
  },
  resolve: async (_parent, args, context) => {
    await context.prisma.profile.delete({
      where: { id: args.id },
    });
  }
}
