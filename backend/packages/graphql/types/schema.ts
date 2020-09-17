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
  bot?: Maybe<Bot>;
  answers?: Maybe<Array<Answer>>;
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
  nextInteraction: NextInteractionResult;
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


export type QueryNextInteractionArgs = {
  input: NextInteractionInput;
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
  nextInteraction?: Maybe<Interaction>;
};

export type GetInteractionInput = {
  id: Scalars['ID'];
};

export type GetInteractionResult = {
  __typename?: 'GetInteractionResult';
  interaction?: Maybe<Interaction>;
};

export type NextInteractionInput = {
  conversationId: Scalars['ID'];
};

export type NextInteractionResult = {
  __typename?: 'NextInteractionResult';
  interaction?: Maybe<Interaction>;
};

export type IndexInteractionInput = {
  botId: Scalars['ID'];
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
