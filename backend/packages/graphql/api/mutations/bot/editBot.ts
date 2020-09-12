import { gql } from 'apollo-server-express';

const editBot = gql`
  mutation editBot($input: EditBotInput!) {
    editBot(input: $input) {
      bot {
        id
        published
        title
      }
    }
  }
`;

export default editBot;
