import { gql } from 'apollo-server-express';

const deleteBot = gql`
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

export default deleteBot;
