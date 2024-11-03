import { GraphQLNonNull, GraphQLString } from "graphql";
import { UUIDType } from "../types/uuid.type.js";

export const UnsubscribeFrom = {
  type: new GraphQLNonNull(GraphQLString),
  args: {
    userId: { type: new GraphQLNonNull(UUIDType) },
    authorId: { type: new GraphQLNonNull(UUIDType) }
  },
  resolve: async (_parent, args, context) => {
    
  }
}