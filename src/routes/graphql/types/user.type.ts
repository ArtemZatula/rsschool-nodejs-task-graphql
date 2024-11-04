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
    userSubscribedTo: {
      type: new GraphQLList(UserType),
      resolve: async (user, _args, { prisma }) => {
        const subscriptions = await prisma.subscribersOnAuthors.findMany({
          where: { subscriberId: user.id },
          include: { author: true },
        });
        return subscriptions.map(sub => sub.author);
      }
    },
    subscribedToUser: {
      type: new GraphQLList(UserType),
      resolve: async (user, _args, { prisma }) => {
        const subscribers = await prisma.subscribersOnAuthors.findMany({
          where: { authorId: user.id },
          include: { subscriber: true },
        });
        return subscribers.map(sub => sub.subscriber);
      }
    },
  }),
});
