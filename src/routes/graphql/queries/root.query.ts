import { GraphQLObjectType } from "graphql";
import { UsersQuery } from "./users.query.js";
import { UserQuery } from "./user.query.js";
import { PostQuery } from "./post.query.js";
import { PostsQuery } from "./posts.query.js";
import { ProfilesQuery } from "./profiles.query.js";
import { ProfileQuery } from "./profile.query.js";
import { MemberQuery } from "./member.query.js";
import { MembersQuery } from "./members.query.js";

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
