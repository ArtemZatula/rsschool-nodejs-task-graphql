import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from "graphql";
import { MemberType, MemberTypeIdEnum } from "./types/member.js";
import { UserType } from "./types/user.js";
import { PostType } from "./types/post.js";
import { ProfileType } from "./types/profile.js";
import { UUIDType } from "./types/uuid.js";
import { UsersQuery } from "./queries/users.js";
import { UserQuery } from "./queries/user.js";

export const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    memberTypes: { type: new GraphQLList(new GraphQLNonNull(MemberType)) },
    memberType: {
      type: MemberType,
      args: { id: { type: new GraphQLNonNull(MemberTypeIdEnum) } },
    },
    users: UsersQuery,
    user: UserQuery,
    posts: { type: new GraphQLList(new GraphQLNonNull(PostType)) },
    post: { type: PostType, args: { id: { type: new GraphQLNonNull(UUIDType) } } },
    profiles: { type: new GraphQLList(new GraphQLNonNull(ProfileType)) },
    profile: { type: ProfileType, args: { id: { type: new GraphQLNonNull(UUIDType) } } },
  },
});
