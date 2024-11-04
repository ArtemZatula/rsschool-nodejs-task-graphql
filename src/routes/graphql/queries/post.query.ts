import { GraphQLNonNull } from "graphql";
import { PostType } from "../types/post.type.js";
import { UUIDType } from "../types/uuid.type.js";

export const PostQuery = {
  type: PostType,
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: async (_parent, args, context) => {
    const { id } = args;
    return await context.prisma.post.findUnique({
      where: { id },
    });
  }
}