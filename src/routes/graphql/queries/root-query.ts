import { GraphQLObjectType } from "graphql";
import { UsersQuery } from "./users.js";
import { UserQuery } from "./user.js";
import { PostQuery } from "./post.js";
import { PostsQuery } from "./posts.js";
import { ProfilesQuery } from "./profiles.js";
import { ProfileQuery } from "./profile.js";
import { MemberQuery } from "./member.js";
import { MembersQuery } from "./members.js";

export const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    memberTypes: MembersQuery,
    memberType: MemberQuery,
    users: UsersQuery,
    user: UserQuery,
    posts: PostsQuery,
    post: PostQuery,
    profiles: ProfilesQuery,
    profile: ProfileQuery,
  },
});
