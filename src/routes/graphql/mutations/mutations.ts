import { GraphQLObjectType } from "graphql";
import { CreateUser } from "./create-user.mutation.js";
import { CreateProfile } from "./create-profile.mutation.js";
import { CreatePost } from "./create-post.mutation.js";
import { ChangePost } from "./change-post.mutation.js";
import { ChangeUser } from "./change-user.mutation.js";
import { ChangeProfile } from "./change-profile.mutation.js";
import { DeleteUser } from "./delete-user.mutation.js";
import { DeletePost } from "./delete-post.mutation.js";
import { DeleteProfile } from "./delete-profile.mutation.js";
import { SubscribeTo } from "./subscribe-to.mutation.js";
import { UnsubscribeFrom } from "./unsubscribe-from.mutation.js";

export const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createUser: CreateUser,
    createProfile: CreateProfile,
    createPost: CreatePost,
    changePost: ChangePost,
    changeProfile: ChangeProfile,
    changeUser: ChangeUser,
    deleteUser: DeleteUser,
    deletePost: DeletePost,
    deleteProfile: DeleteProfile,
    subscribeTo: SubscribeTo,
    unsubscribeFrom: UnsubscribeFrom,
  },
});