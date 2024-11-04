import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema, schema } from './schemas.js';
import { graphql, parse, validate } from 'graphql';
import depthLimit from 'graphql-depth-limit';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  const { prisma, httpErrors } = fastify;

  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req, reply) {
      const { query, variables } = req.body;
      const validationErrors = validate(schema, parse(query), [depthLimit(5)]);

      if (validationErrors.length > 0) {
        await reply.code(400).send({ errors: validationErrors.map(err => ({ message: err.message })) });
        return;
      }

      return graphql({
        schema,
        source: query,
        variableValues: variables,
        contextValue: { prisma, httpErrors },
      });
    },
  });
};

export default plugin;
