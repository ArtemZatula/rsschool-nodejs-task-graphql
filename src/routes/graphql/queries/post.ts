import { GraphQLNonNull } from "graphql";
import { PostType } from "../types/post.js";
import { UUIDType } from "../types/uuid.js";

export const PostQuery = {
  type: PostType,
  args: { id: { type: new GraphQLNonNull(UUIDType) } },
  resolve: async (_parent, args, context) => {
    const { id } = args;
    try {
      const post = await context.prisma.post.findUnique({
        where: { id },
      });
      if (post === null) {
        // throw httpErrors.notFound();
      }
      return post;
    } catch (error) {
      throw new Error("Failed to fetch posts");
    }
  }
}