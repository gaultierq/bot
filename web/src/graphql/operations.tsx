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

export type Answer = {
  __typename?: 'Answer';
  id: Scalars['ID'];
  conversation?: Maybe<Conversation>;
  interaction?: Maybe<Interaction>;
  content?: Maybe<Scalars['String']>;
};

export type Bot = {
  __typename?: 'Bot';
  id: Scalars['ID'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  author?: Maybe<User>;
  image?: Maybe<Scalars['String']>;
};

export type Conversation = {
  __typename?: 'Conversation';
  id: Scalars['ID'];
  conversation?: Maybe<Conversation>;
  interaction?: Maybe<Interaction>;
};

export type Interaction = {
  __typename?: 'Interaction';
  id: Scalars['ID'];
  content: Scalars['String'];
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
  getAnswer: GetAnswerResult;
  getBot: GetBotResult;
  indexBot: IndexBotResult;
  getConversation: GetConversationResult;
  getInteraction: GetInteractionResult;
  indexInteraction: IndexInteractionResult;
  getPost: GetPostResult;
  getUser: GetUserResult;
};


export type QueryGetAnswerArgs = {
  input: GetAnswerInput;
};


export type QueryGetBotArgs = {
  input: GetBotInput;
};


export type QueryGetConversationArgs = {
  input: GetConversationInput;
};


export type QueryGetInteractionArgs = {
  input: GetInteractionInput;
};


export type QueryIndexInteractionArgs = {
  input: IndexInteractionInput;
};


export type QueryGetPostArgs = {
  input: GetPostInput;
};


export type QueryGetUserArgs = {
  input: GetUserInput;
};

export type GetAnswerInput = {
  id: Scalars['ID'];
};

export type GetAnswerResult = {
  __typename?: 'GetAnswerResult';
  answer?: Maybe<Answer>;
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

export type GetConversationInput = {
  id: Scalars['ID'];
};

export type GetConversationResult = {
  __typename?: 'GetConversationResult';
  conversation?: Maybe<Conversation>;
};

export type GetInteractionInput = {
  id: Scalars['ID'];
};

export type IndexInteractionInput = {
  botId: Scalars['ID'];
};

export type GetInteractionResult = {
  __typename?: 'GetInteractionResult';
  interaction?: Maybe<Interaction>;
};

export type IndexInteractionResult = {
  __typename?: 'IndexInteractionResult';
  interactions: Array<Maybe<Interaction>>;
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
  createAnswer: CreateAnswerResult;
  createBot: CreateBotResult;
  editBot: EditBotResult;
  deleteBot: DeleteBotResult;
  createConversation: CreateConversationResult;
  createInteraction: CreateInteractionResult;
  editInteraction: EditInteractionResult;
  deleteInteraction: DeleteInteractionResult;
};


export type MutationCreateAnswerArgs = {
  input: CreateAnswerInput;
};


export type MutationCreateBotArgs = {
  input: CreateBotInput;
};


export type MutationEditBotArgs = {
  input: EditBotInput;
};


export type MutationDeleteBotArgs = {
  input: DeleteBotInput;
};


export type MutationCreateConversationArgs = {
  input: CreateConversationInput;
};


export type MutationCreateInteractionArgs = {
  input: CreateInteractionInput;
};


export type MutationEditInteractionArgs = {
  input: EditInteractionInput;
};


export type MutationDeleteInteractionArgs = {
  input: DeleteInteractionInput;
};

export type CreateAnswerInput = {
  interactionId: Scalars['String'];
  conversationId: Scalars['String'];
  content: Scalars['String'];
};

export type CreateAnswerResult = {
  __typename?: 'CreateAnswerResult';
  answer?: Maybe<Answer>;
};

export type CreateBotInput = {
  title: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type CreateBotResult = {
  __typename?: 'CreateBotResult';
  bot?: Maybe<Bot>;
};

export type EditBotInput = {
  id: Scalars['ID'];
  title: Scalars['String'];
  image: Scalars['String'];
  published: Scalars['Boolean'];
};

export type EditBotResult = {
  __typename?: 'EditBotResult';
  bot?: Maybe<Bot>;
};

export type DeleteBotInput = {
  id: Scalars['ID'];
};

export type DeleteBotResult = {
  __typename?: 'DeleteBotResult';
  bot?: Maybe<Bot>;
};

export type CreateConversationInput = {
  botId: Scalars['String'];
  content: Scalars['String'];
};

export type CreateConversationResult = {
  __typename?: 'CreateConversationResult';
  conversation?: Maybe<Conversation>;
};

export type CreateInteractionInput = {
  botId: Scalars['String'];
  content: Scalars['String'];
};

export type CreateInteractionResult = {
  __typename?: 'CreateInteractionResult';
  interaction?: Maybe<Interaction>;
};

export type EditInteractionInput = {
  id: Scalars['ID'];
  content: Scalars['String'];
};

export type EditInteractionResult = {
  __typename?: 'EditInteractionResult';
  interaction?: Maybe<Interaction>;
};

export type DeleteInteractionInput = {
  id: Scalars['ID'];
};

export type DeleteInteractionResult = {
  __typename?: 'DeleteInteractionResult';
  interaction?: Maybe<Interaction>;
};

export type CreateAnswerMutationVariables = Exact<{
  input: CreateAnswerInput;
}>;


export type CreateAnswerMutation = (
  { __typename?: 'Mutation' }
  & { createAnswer: (
    { __typename?: 'CreateAnswerResult' }
    & { answer?: Maybe<(
      { __typename?: 'Answer' }
      & Pick<Answer, 'id' | 'content'>
    )> }
  ) }
);

export type CreateBotMutationVariables = Exact<{
  input: CreateBotInput;
}>;


export type CreateBotMutation = (
  { __typename?: 'Mutation' }
  & { createBot: (
    { __typename?: 'CreateBotResult' }
    & { bot?: Maybe<(
      { __typename?: 'Bot' }
      & Pick<Bot, 'id' | 'published' | 'title'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id'>
      )> }
    )> }
  ) }
);

export type DeleteBotMutationVariables = Exact<{
  input: DeleteBotInput;
}>;


export type DeleteBotMutation = (
  { __typename?: 'Mutation' }
  & { deleteBot: (
    { __typename?: 'DeleteBotResult' }
    & { bot?: Maybe<(
      { __typename?: 'Bot' }
      & Pick<Bot, 'id' | 'published' | 'title'>
    )> }
  ) }
);

export type EditBotMutationVariables = Exact<{
  input: EditBotInput;
}>;


export type EditBotMutation = (
  { __typename?: 'Mutation' }
  & { editBot: (
    { __typename?: 'EditBotResult' }
    & { bot?: Maybe<(
      { __typename?: 'Bot' }
      & Pick<Bot, 'id' | 'published' | 'image' | 'title'>
    )> }
  ) }
);

export type CreateInteractionMutationVariables = Exact<{
  input: CreateInteractionInput;
}>;


export type CreateInteractionMutation = (
  { __typename?: 'Mutation' }
  & { createInteraction: (
    { __typename?: 'CreateInteractionResult' }
    & { interaction?: Maybe<(
      { __typename?: 'Interaction' }
      & Pick<Interaction, 'id' | 'content'>
    )> }
  ) }
);

export type DeleteInteractionMutationVariables = Exact<{
  input: DeleteInteractionInput;
}>;


export type DeleteInteractionMutation = (
  { __typename?: 'Mutation' }
  & { deleteInteraction: (
    { __typename?: 'DeleteInteractionResult' }
    & { interaction?: Maybe<(
      { __typename?: 'Interaction' }
      & Pick<Interaction, 'id' | 'content'>
    )> }
  ) }
);

export type EditInteractionMutationVariables = Exact<{
  input: EditInteractionInput;
}>;


export type EditInteractionMutation = (
  { __typename?: 'Mutation' }
  & { editInteraction: (
    { __typename?: 'EditInteractionResult' }
    & { interaction?: Maybe<(
      { __typename?: 'Interaction' }
      & Pick<Interaction, 'id' | 'content'>
    )> }
  ) }
);

export type GetAnswerQueryVariables = Exact<{
  input: GetAnswerInput;
}>;


export type GetAnswerQuery = (
  { __typename?: 'Query' }
  & { getAnswer: (
    { __typename?: 'GetAnswerResult' }
    & { answer?: Maybe<(
      { __typename?: 'Answer' }
      & Pick<Answer, 'id' | 'content'>
    )> }
  ) }
);

export type GetBotQueryVariables = Exact<{
  input: GetBotInput;
}>;


export type GetBotQuery = (
  { __typename?: 'Query' }
  & { getBot: (
    { __typename?: 'GetBotResult' }
    & { bot?: Maybe<(
      { __typename?: 'Bot' }
      & Pick<Bot, 'id' | 'published' | 'title' | 'image'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id'>
      )> }
    )> }
  ) }
);

export type IndexBotQueryVariables = Exact<{ [key: string]: never; }>;


export type IndexBotQuery = (
  { __typename?: 'Query' }
  & { indexBot: (
    { __typename?: 'IndexBotResult' }
    & { bots: Array<Maybe<(
      { __typename?: 'Bot' }
      & Pick<Bot, 'id' | 'published' | 'title'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id'>
      )> }
    )>> }
  ) }
);

export type GetInteractionQueryVariables = Exact<{
  input: GetInteractionInput;
}>;


export type GetInteractionQuery = (
  { __typename?: 'Query' }
  & { getInteraction: (
    { __typename?: 'GetInteractionResult' }
    & { interaction?: Maybe<(
      { __typename?: 'Interaction' }
      & Pick<Interaction, 'id' | 'content'>
    )> }
  ) }
);

export type IndexInteractionQueryVariables = Exact<{
  input: IndexInteractionInput;
}>;


export type IndexInteractionQuery = (
  { __typename?: 'Query' }
  & { indexInteraction: (
    { __typename?: 'IndexInteractionResult' }
    & { interactions: Array<Maybe<(
      { __typename?: 'Interaction' }
      & Pick<Interaction, 'id' | 'content'>
    )>> }
  ) }
);

export type GetPostQueryVariables = Exact<{
  input: GetPostInput;
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { getPost: (
    { __typename?: 'GetPostResult' }
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'content' | 'published' | 'title'>
      & { author?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id'>
      )> }
    )> }
  ) }
);

export type GetUserQueryVariables = Exact<{
  input: GetUserInput;
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser: (
    { __typename?: 'GetUserResult' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name'>
      & { posts?: Maybe<Array<Maybe<(
        { __typename?: 'Post' }
        & Pick<Post, 'id'>
      )>>> }
    )> }
  ) }
);


export const CreateAnswerDocument = gql`
    mutation createAnswer($input: CreateAnswerInput!) {
  createAnswer(input: $input) {
    answer {
      id
      content
    }
  }
}
    `;
export type CreateAnswerMutationFn = Apollo.MutationFunction<CreateAnswerMutation, CreateAnswerMutationVariables>;

/**
 * __useCreateAnswerMutation__
 *
 * To run a mutation, you first call `useCreateAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnswerMutation, { data, loading, error }] = useCreateAnswerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAnswerMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnswerMutation, CreateAnswerMutationVariables>) {
        return Apollo.useMutation<CreateAnswerMutation, CreateAnswerMutationVariables>(CreateAnswerDocument, baseOptions);
      }
export type CreateAnswerMutationHookResult = ReturnType<typeof useCreateAnswerMutation>;
export type CreateAnswerMutationResult = Apollo.MutationResult<CreateAnswerMutation>;
export type CreateAnswerMutationOptions = Apollo.BaseMutationOptions<CreateAnswerMutation, CreateAnswerMutationVariables>;
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
export function useCreateBotMutation(baseOptions?: Apollo.MutationHookOptions<CreateBotMutation, CreateBotMutationVariables>) {
        return Apollo.useMutation<CreateBotMutation, CreateBotMutationVariables>(CreateBotDocument, baseOptions);
      }
export type CreateBotMutationHookResult = ReturnType<typeof useCreateBotMutation>;
export type CreateBotMutationResult = Apollo.MutationResult<CreateBotMutation>;
export type CreateBotMutationOptions = Apollo.BaseMutationOptions<CreateBotMutation, CreateBotMutationVariables>;
export const DeleteBotDocument = gql`
    mutation deleteBot($input: DeleteBotInput!) {
  deleteBot(input: $input) {
    bot {
      id
      published
      title
    }
  }
}
    `;
export type DeleteBotMutationFn = Apollo.MutationFunction<DeleteBotMutation, DeleteBotMutationVariables>;

/**
 * __useDeleteBotMutation__
 *
 * To run a mutation, you first call `useDeleteBotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBotMutation, { data, loading, error }] = useDeleteBotMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteBotMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBotMutation, DeleteBotMutationVariables>) {
        return Apollo.useMutation<DeleteBotMutation, DeleteBotMutationVariables>(DeleteBotDocument, baseOptions);
      }
export type DeleteBotMutationHookResult = ReturnType<typeof useDeleteBotMutation>;
export type DeleteBotMutationResult = Apollo.MutationResult<DeleteBotMutation>;
export type DeleteBotMutationOptions = Apollo.BaseMutationOptions<DeleteBotMutation, DeleteBotMutationVariables>;
export const EditBotDocument = gql`
    mutation editBot($input: EditBotInput!) {
  editBot(input: $input) {
    bot {
      id
      published
      image
      title
    }
  }
}
    `;
export type EditBotMutationFn = Apollo.MutationFunction<EditBotMutation, EditBotMutationVariables>;

/**
 * __useEditBotMutation__
 *
 * To run a mutation, you first call `useEditBotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBotMutation, { data, loading, error }] = useEditBotMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditBotMutation(baseOptions?: Apollo.MutationHookOptions<EditBotMutation, EditBotMutationVariables>) {
        return Apollo.useMutation<EditBotMutation, EditBotMutationVariables>(EditBotDocument, baseOptions);
      }
export type EditBotMutationHookResult = ReturnType<typeof useEditBotMutation>;
export type EditBotMutationResult = Apollo.MutationResult<EditBotMutation>;
export type EditBotMutationOptions = Apollo.BaseMutationOptions<EditBotMutation, EditBotMutationVariables>;
export const CreateInteractionDocument = gql`
    mutation createInteraction($input: CreateInteractionInput!) {
  createInteraction(input: $input) {
    interaction {
      id
      content
    }
  }
}
    `;
export type CreateInteractionMutationFn = Apollo.MutationFunction<CreateInteractionMutation, CreateInteractionMutationVariables>;

/**
 * __useCreateInteractionMutation__
 *
 * To run a mutation, you first call `useCreateInteractionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateInteractionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createInteractionMutation, { data, loading, error }] = useCreateInteractionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateInteractionMutation(baseOptions?: Apollo.MutationHookOptions<CreateInteractionMutation, CreateInteractionMutationVariables>) {
        return Apollo.useMutation<CreateInteractionMutation, CreateInteractionMutationVariables>(CreateInteractionDocument, baseOptions);
      }
export type CreateInteractionMutationHookResult = ReturnType<typeof useCreateInteractionMutation>;
export type CreateInteractionMutationResult = Apollo.MutationResult<CreateInteractionMutation>;
export type CreateInteractionMutationOptions = Apollo.BaseMutationOptions<CreateInteractionMutation, CreateInteractionMutationVariables>;
export const DeleteInteractionDocument = gql`
    mutation deleteInteraction($input: DeleteInteractionInput!) {
  deleteInteraction(input: $input) {
    interaction {
      id
      content
    }
  }
}
    `;
export type DeleteInteractionMutationFn = Apollo.MutationFunction<DeleteInteractionMutation, DeleteInteractionMutationVariables>;

/**
 * __useDeleteInteractionMutation__
 *
 * To run a mutation, you first call `useDeleteInteractionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteInteractionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteInteractionMutation, { data, loading, error }] = useDeleteInteractionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteInteractionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteInteractionMutation, DeleteInteractionMutationVariables>) {
        return Apollo.useMutation<DeleteInteractionMutation, DeleteInteractionMutationVariables>(DeleteInteractionDocument, baseOptions);
      }
export type DeleteInteractionMutationHookResult = ReturnType<typeof useDeleteInteractionMutation>;
export type DeleteInteractionMutationResult = Apollo.MutationResult<DeleteInteractionMutation>;
export type DeleteInteractionMutationOptions = Apollo.BaseMutationOptions<DeleteInteractionMutation, DeleteInteractionMutationVariables>;
export const EditInteractionDocument = gql`
    mutation editInteraction($input: EditInteractionInput!) {
  editInteraction(input: $input) {
    interaction {
      id
      content
    }
  }
}
    `;
export type EditInteractionMutationFn = Apollo.MutationFunction<EditInteractionMutation, EditInteractionMutationVariables>;

/**
 * __useEditInteractionMutation__
 *
 * To run a mutation, you first call `useEditInteractionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditInteractionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editInteractionMutation, { data, loading, error }] = useEditInteractionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditInteractionMutation(baseOptions?: Apollo.MutationHookOptions<EditInteractionMutation, EditInteractionMutationVariables>) {
        return Apollo.useMutation<EditInteractionMutation, EditInteractionMutationVariables>(EditInteractionDocument, baseOptions);
      }
export type EditInteractionMutationHookResult = ReturnType<typeof useEditInteractionMutation>;
export type EditInteractionMutationResult = Apollo.MutationResult<EditInteractionMutation>;
export type EditInteractionMutationOptions = Apollo.BaseMutationOptions<EditInteractionMutation, EditInteractionMutationVariables>;
export const GetAnswerDocument = gql`
    query getAnswer($input: GetAnswerInput!) {
  getAnswer(input: $input) {
    answer {
      id
      content
    }
  }
}
    `;

/**
 * __useGetAnswerQuery__
 *
 * To run a query within a React component, call `useGetAnswerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnswerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnswerQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAnswerQuery(baseOptions?: Apollo.QueryHookOptions<GetAnswerQuery, GetAnswerQueryVariables>) {
        return Apollo.useQuery<GetAnswerQuery, GetAnswerQueryVariables>(GetAnswerDocument, baseOptions);
      }
export function useGetAnswerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnswerQuery, GetAnswerQueryVariables>) {
          return Apollo.useLazyQuery<GetAnswerQuery, GetAnswerQueryVariables>(GetAnswerDocument, baseOptions);
        }
export type GetAnswerQueryHookResult = ReturnType<typeof useGetAnswerQuery>;
export type GetAnswerLazyQueryHookResult = ReturnType<typeof useGetAnswerLazyQuery>;
export type GetAnswerQueryResult = Apollo.QueryResult<GetAnswerQuery, GetAnswerQueryVariables>;
export const GetBotDocument = gql`
    query getBot($input: GetBotInput!) {
  getBot(input: $input) {
    bot {
      id
      published
      title
      image
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
export const GetInteractionDocument = gql`
    query getInteraction($input: GetInteractionInput!) {
  getInteraction(input: $input) {
    interaction {
      id
      content
    }
  }
}
    `;

/**
 * __useGetInteractionQuery__
 *
 * To run a query within a React component, call `useGetInteractionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInteractionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInteractionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetInteractionQuery(baseOptions?: Apollo.QueryHookOptions<GetInteractionQuery, GetInteractionQueryVariables>) {
        return Apollo.useQuery<GetInteractionQuery, GetInteractionQueryVariables>(GetInteractionDocument, baseOptions);
      }
export function useGetInteractionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInteractionQuery, GetInteractionQueryVariables>) {
          return Apollo.useLazyQuery<GetInteractionQuery, GetInteractionQueryVariables>(GetInteractionDocument, baseOptions);
        }
export type GetInteractionQueryHookResult = ReturnType<typeof useGetInteractionQuery>;
export type GetInteractionLazyQueryHookResult = ReturnType<typeof useGetInteractionLazyQuery>;
export type GetInteractionQueryResult = Apollo.QueryResult<GetInteractionQuery, GetInteractionQueryVariables>;
export const IndexInteractionDocument = gql`
    query indexInteraction($input: IndexInteractionInput!) {
  indexInteraction(input: $input) {
    interactions {
      id
      content
    }
  }
}
    `;

/**
 * __useIndexInteractionQuery__
 *
 * To run a query within a React component, call `useIndexInteractionQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexInteractionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexInteractionQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useIndexInteractionQuery(baseOptions?: Apollo.QueryHookOptions<IndexInteractionQuery, IndexInteractionQueryVariables>) {
        return Apollo.useQuery<IndexInteractionQuery, IndexInteractionQueryVariables>(IndexInteractionDocument, baseOptions);
      }
export function useIndexInteractionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IndexInteractionQuery, IndexInteractionQueryVariables>) {
          return Apollo.useLazyQuery<IndexInteractionQuery, IndexInteractionQueryVariables>(IndexInteractionDocument, baseOptions);
        }
export type IndexInteractionQueryHookResult = ReturnType<typeof useIndexInteractionQuery>;
export type IndexInteractionLazyQueryHookResult = ReturnType<typeof useIndexInteractionLazyQuery>;
export type IndexInteractionQueryResult = Apollo.QueryResult<IndexInteractionQuery, IndexInteractionQueryVariables>;
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