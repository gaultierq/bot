## GraphQL package

### How to make change to the data model
1. edit the  `schema/**/*.graphql` files
2. `yarn generate`
3. use the generated type and write the resolvers

### codegen went wrong
if something went wrong when codegen, then the server cannot start and fixing 
the problem can be difficult. 
You can try not importing the resolver so the server can start again.

This workspace package contains the graphql abstractions and serves it using [Apollo](https://www.apollographql.com/docs/apollo-server/getting-started/)

**Commands**

Following npm scripts are available for convenience

* `yarn generate` uses [graphql-codegen](https://graphql-code-generator.com/) to generate types and a stitched `schema.graphql` 
