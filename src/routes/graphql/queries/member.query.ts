import { GraphQLNonNull } from "graphql";
import { MemberType, MemberTypeIdEnum } from "../types/member.type.js";

export const MemberQuery = {
  type: MemberType,
  args: {
    id: { type: new GraphQLNonNull(MemberTypeIdEnum) }
  },
  resolve: async (_, { id }, context) => {
    const memberType = await context.prisma.memberType.findUnique({
      where: { id },
    });
    if (memberType === null) {
      throw context.httpErrors.notFound();
    }
    return memberType;
  }
}