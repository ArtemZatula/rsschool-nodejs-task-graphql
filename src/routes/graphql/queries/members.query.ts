import { GraphQLList, GraphQLNonNull } from "graphql";
import { MemberType } from "../types/member.type.js";

export const MembersQuery = {
  type: new GraphQLList(new GraphQLNonNull(MemberType)),
  resolve: async (_parent, _args, { prisma }) =>
    prisma.memberType.findMany(),
}