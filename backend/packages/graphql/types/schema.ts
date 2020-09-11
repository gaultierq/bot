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
