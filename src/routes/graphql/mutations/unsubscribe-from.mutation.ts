import { GraphQLNonNull, GraphQLString } from "graphql";
import { UUIDType } from "../types/uuid.type.js";

export const UnsubscribeFrom = {
  type: GraphQLString,
  args: {
    userId: { type: new GraphQLNonNull(UUIDType) },
    authorId: { type: new GraphQLNonNull(UUIDType) }
  },
  resolve: async (_parent, { userId, authorId}, { prisma }) => {
    await prisma.subscribersOnAuthors.delete({
      where: {
        subscriberId_authorId: {
          subscriberId: userId,
          authorId,
        },
      },
    });
    return "Unsubscription successful";
  }
}