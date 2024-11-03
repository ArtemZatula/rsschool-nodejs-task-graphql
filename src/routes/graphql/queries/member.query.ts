import { GraphQLNonNull } from "graphql";
import { MemberType, MemberTypeIdEnum } from "../types/member.type.js";

export const MemberQuery = {
  type: MemberType,
  args: {
    id: { type: new GraphQLNonNull(MemberTypeIdEnum) }
  },
  resolve: async (_, { id }, context) => 
    await context.prisma.memberType.findUnique({
      where: { id },
    })
}