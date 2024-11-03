import { GraphQLNonNull } from "graphql"
import { PostType } from "../types/post.type.js"
import { CreatePostInput } from "../inputs/create-post.input.js"

export const CreatePost =  {
  type: PostType,
  args: { 
    dto: { type: new GraphQLNonNull(CreatePostInput) }
  },
  resolve: async (_, args, context) => 
    await context.prisma.post.create({
      data: args.dto
    }),
}