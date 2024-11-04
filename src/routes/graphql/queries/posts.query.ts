import { GraphQLList, GraphQLNonNull } from "graphql";
import { PostType } from "../types/post.type.js";

export const PostsQuery =  {
  type: new GraphQLList(new GraphQLNonNull(PostType)),
  resolve: async (_parent, _args, context) => {
    try {
      return await context.prisma.post.findMany();
    } catch (error) {
      throw new Error("Failed to fetch posts");
    }
  }
}