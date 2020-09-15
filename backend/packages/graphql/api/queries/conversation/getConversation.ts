import { gql } from 'apollo-server-express';

const getConversation = gql`
  query getConversation($input: GetConversationInput!) {
    getConversation(input: $input) {
      conversation {
        id
        nextInteraction {
          id
        }
      }
    }
  }
`;

export default getConversation;
