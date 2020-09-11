import { gql } from 'apollo-server-express';

const createBot = gql`
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

export default createBot;
