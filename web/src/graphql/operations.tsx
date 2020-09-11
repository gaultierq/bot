import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bot = {
  __typename?: 'Bot';
  id: Scalars['ID'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  author?: Maybe<User>;
  image?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  title: Scalars['String'];
  author?: Maybe<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type Query = {
  __typename?: 'Query';
  getBot: GetBotResult;
  indexBot: IndexBotResult;
  getPost: GetPostResult;
  getUser: GetUserResult;
};

export type QueryGetBotArgs = {
  input: GetBotInput;
};

export type QueryGetPostArgs = {
  input: GetPostInput;
};

export type QueryGetUserArgs = {
  input: GetUserInput;
};

export type GetBotInput = {
  id: Scalars['ID'];
};

export type GetBotResult = {
  __typename?: 'GetBotResult';
  bot?: Maybe<Bot>;
};

export type IndexBotResult = {
  __typename?: 'IndexBotResult';
  bots: Array<Maybe<Bot>>;
};

export type GetPostInput = {
  id: Scalars['ID'];
};

export type GetPostResult = {
  __typename?: 'GetPostResult';
  post?: Maybe<Post>;
};

export type GetUserInput = {
  id: Scalars['ID'];
};

export type GetUserResult = {
  __typename?: 'GetUserResult';
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBot: CreateBotResult;
};

export type MutationCreateBotArgs = {
  input: CreateBotInput;
};

export type CreateBotInput = {
  title: Scalars['String'];
};

export type CreateBotResult = {
  __typename?: 'CreateBotResult';
  bot?: Maybe<Bot>;
};

export type CreateBotMutationVariables = Exact<{
  input: CreateBotInput;
}>;

export type CreateBotMutation = { __typename?: 'Mutation' } & {
  createBot: { __typename?: 'CreateBotResult' } & {
    bot?: Maybe<
    { __typename?: 'Bot' } & Pick<Bot, 'id' | 'published' | 'title'> & {
      author?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
    }
    >;
  };
};

export type GetBotQueryVariables = Exact<{
  input: GetBotInput;
}>;

export type GetBotQuery = { __typename?: 'Query' } & {
  getBot: { __typename?: 'GetBotResult' } & {
    bot?: Maybe<
    { __typename?: 'Bot' } & Pick<Bot, 'id' | 'published' | 'title'> & {
      author?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
    }
    >;
  };
};

export type IndexBotQueryVariables = Exact<{ [key: string]: never }>;

export type IndexBotQuery = { __typename?: 'Query' } & {
  indexBot: { __typename?: 'IndexBotResult' } & {
    bots: Array<
    Maybe<
    { __typename?: 'Bot' } & Pick<Bot, 'id' | 'published' | 'title'> & {
      author?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
    }
    >
    >;
  };
};

export type GetPostQueryVariables = Exact<{
  input: GetPostInput;
}>;

export type GetPostQuery = { __typename?: 'Query' } & {
  getPost: { __typename?: 'GetPostResult' } & {
    post?: Maybe<
    { __typename?: 'Post' } & Pick<Post, 'id' | 'content' | 'published' | 'title'> & {
      author?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
    }
    >;
  };
};

export type GetUserQueryVariables = Exact<{
  input: GetUserInput;
}>;

export type GetUserQuery = { __typename?: 'Query' } & {
  getUser: { __typename?: 'GetUserResult' } & {
    user?: Maybe<
    { __typename?: 'User' } & Pick<User, 'id' | 'email' | 'name'> & {
      posts?: Maybe<Array<Maybe<{ __typename?: 'Post' } & Pick<Post, 'id'>>>>;
    }
    >;
  };
};

export const CreateBotDocument = gql`
  mutation createBot($input: CreateBotInput!) {
    createBot(input: $input) {
      bot {
        id
        published
        title
        author {
          id
        }
      }
    }
  }
`;
export type CreateBotMutationFn = Apollo.MutationFunction<CreateBotMutation, CreateBotMutationVariables>;

/**
 * __useCreateBotMutation__
 *
 * To run a mutation, you first call `useCreateBotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBotMutation, { data, loading, error }] = useCreateBotMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBotMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateBotMutation, CreateBotMutationVariables>
) {
  return Apollo.useMutation<CreateBotMutation, CreateBotMutationVariables>(CreateBotDocument, baseOptions);
}
export type CreateBotMutationHookResult = ReturnType<typeof useCreateBotMutation>;
export type CreateBotMutationResult = Apollo.MutationResult<CreateBotMutation>;
export type CreateBotMutationOptions = Apollo.BaseMutationOptions<CreateBotMutation, CreateBotMutationVariables>;
export const GetBotDocument = gql`
  query getBot($input: GetBotInput!) {
    getBot(input: $input) {
      bot {
        id
        published
        title
        author {
          id
        }
      }
    }
  }
`;

/**
 * __useGetBotQuery__
 *
 * To run a query within a React component, call `useGetBotQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBotQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBotQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetBotQuery(baseOptions?: Apollo.QueryHookOptions<GetBotQuery, GetBotQueryVariables>) {
  return Apollo.useQuery<GetBotQuery, GetBotQueryVariables>(GetBotDocument, baseOptions);
}
export function useGetBotLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBotQuery, GetBotQueryVariables>) {
  return Apollo.useLazyQuery<GetBotQuery, GetBotQueryVariables>(GetBotDocument, baseOptions);
}
export type GetBotQueryHookResult = ReturnType<typeof useGetBotQuery>;
export type GetBotLazyQueryHookResult = ReturnType<typeof useGetBotLazyQuery>;
export type GetBotQueryResult = Apollo.QueryResult<GetBotQuery, GetBotQueryVariables>;
export const IndexBotDocument = gql`
  query indexBot {
    indexBot {
      bots {
        id
        published
        title
        author {
          id
        }
      }
    }
  }
`;

/**
 * __useIndexBotQuery__
 *
 * To run a query within a React component, call `useIndexBotQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexBotQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexBotQuery({
 *   variables: {
 *   },
 * });
 */
export function useIndexBotQuery(baseOptions?: Apollo.QueryHookOptions<IndexBotQuery, IndexBotQueryVariables>) {
  return Apollo.useQuery<IndexBotQuery, IndexBotQueryVariables>(IndexBotDocument, baseOptions);
}
export function useIndexBotLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IndexBotQuery, IndexBotQueryVariables>) {
  return Apollo.useLazyQuery<IndexBotQuery, IndexBotQueryVariables>(IndexBotDocument, baseOptions);
}
export type IndexBotQueryHookResult = ReturnType<typeof useIndexBotQuery>;
export type IndexBotLazyQueryHookResult = ReturnType<typeof useIndexBotLazyQuery>;
export type IndexBotQueryResult = Apollo.QueryResult<IndexBotQuery, IndexBotQueryVariables>;
export const GetPostDocument = gql`
  query getPost($input: GetPostInput!) {
    getPost(input: $input) {
      post {
        id
        content
        published
        title
        author {
          id
        }
      }
    }
  }
`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions?: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
  return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
}
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
  return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, baseOptions);
}
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetUserDocument = gql`
  query getUser($input: GetUserInput!) {
    getUser(input: $input) {
      user {
        id
        email
        name
        posts {
          id
        }
      }
    }
  }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
}
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
