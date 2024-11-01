import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UserType } from "./types/user.js";
import { PostType } from "./types/post.js";
import { ProfileType } from "./types/profile.js";
import { UUIDType } from "./types/uuid.js";
import { CreateUserInput } from "./inputs/create-user.js";
import { CreateProfileInput } from "./inputs/create-profile.js";
import { CreatePostInput } from "./inputs/create-post.js";
import { ChangePostInput } from "./inputs/change-post.js";
import { ChangeProfileInput } from "./inputs/change-profile.js";
import { ChangeUserInput } from "./inputs/change-user.js";

export const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createUser: { type: UserType, args: { dto: { type: new GraphQLNonNull(CreateUserInput) } } },
    createProfile: { type: ProfileType, args: { dto: { type: new GraphQLNonNull(CreateProfileInput) } } },
    createPost: { type: PostType, args: { dto: { type: new GraphQLNonNull(CreatePostInput) } } },
    changePost: { type: PostType, args: { id: { type: new GraphQLNonNull(UUIDType) }, dto: { type: new GraphQLNonNull(ChangePostInput) } } },
    changeProfile: { type: ProfileType, args: { id: { type: new GraphQLNonNull(UUIDType) }, dto: { type: new GraphQLNonNull(ChangeProfileInput) } } },
    changeUser: { type: UserType, args: { id: { type: new GraphQLNonNull(UUIDType) }, dto: { type: new GraphQLNonNull(ChangeUserInput) } } },
    deleteUser: { type: new GraphQLNonNull(GraphQLString), args: { id: { type: new GraphQLNonNull(UUIDType) } } },
    deletePost: { type: new GraphQLNonNull(GraphQLString), args: { id: { type: new GraphQLNonNull(UUIDType) } } },
    deleteProfile: { type: new GraphQLNonNull(GraphQLString), args: { id: { type: new GraphQLNonNull(UUIDType) } } },
    subscribeTo: { type: new GraphQLNonNull(GraphQLString), args: { userId: { type: new GraphQLNonNull(UUIDType) }, authorId: { type: new GraphQLNonNull(UUIDType) } } },
    unsubscribeFrom: { type: new GraphQLNonNull(GraphQLString), args: { userId: { type: new GraphQLNonNull(UUIDType) }, authorId: { type: new GraphQLNonNull(UUIDType) } } },
  },
});