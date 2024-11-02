import { GraphQLFloat, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.type.js";
import { ProfileType } from "./profile.type.js";
import { PostType } from "./post.type.js";

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    balance: { type: new GraphQLNonNull(GraphQLFloat) },
    profile: { type: ProfileType },
    posts: { type: new GraphQLList(new GraphQLNonNull(PostType))},
    userSubscribedTo: { type: new GraphQLList(new GraphQLNonNull(UserType)) },
    subscribedToUser: { type: new GraphQLList(new GraphQLNonNull(UserType)) },
  }),
});
