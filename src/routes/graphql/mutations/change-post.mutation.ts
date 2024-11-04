import { GraphQLNonNull } from "graphql";
import { PostType } from "../types/post.type.js";
import { UUIDType } from "../types/uuid.type.js";
import { ChangePostInput } from "../inputs/change-post.input.js";

export const ChangePost = {
  type: PostType,
  args: {
    id: {
      type: new GraphQLNonNull(UUIDType) },
      dto: { type: new GraphQLNonNull(ChangePostInput) }
    },
  resolve: async (_parent, args, context) => 
    await context.prisma.post.update({
      where: { id: args.id },
      data: args.dto,
    })
}