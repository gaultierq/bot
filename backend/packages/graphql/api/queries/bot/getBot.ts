import { gql } from 'apollo-server-express';

const getBot = gql`
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

export default getBot;
