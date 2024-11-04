import { GraphQLNonNull, GraphQLString } from "graphql";
import { UUIDType } from "../types/uuid.type.js";

export const SubscribeTo = {
  type: GraphQLString,
  args: {
    userId: { type: new GraphQLNonNull(UUIDType) },
    authorId: { type: new GraphQLNonNull(UUIDType) }
  },
  resolve: async (_parent, { userId: subscriberId, authorId }, { prisma }) => {
    await prisma.subscribersOnAuthors.create({
      data: { subscriberId, authorId },
    });
    return "Subscription successful";
  }
}