import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLInt
} from "graphql";
import { MemberTypeIdEnum } from "../types/member.js";

export const ChangeProfileInput = new GraphQLInputObjectType({
  name: 'ChangeProfileInput',
  fields: {
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLInt },
    memberTypeId: { type: MemberTypeIdEnum },
  },
});