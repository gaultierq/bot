import { gql } from 'apollo-server-express';

const getBot = gql`
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

export default getBot;
