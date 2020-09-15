import { gql } from 'apollo-server-express';

const createConversation = gql`
  mutation createConversation($input: CreateConversationInput!) {
    createConversation(input: $input) {
      conversation {
        id
      }
    }
  }
`;

export default createConversation;
