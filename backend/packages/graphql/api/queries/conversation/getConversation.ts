import { gql } from 'apollo-server-express';

const getConversation = gql`
  query getConversation($input: GetConversationInput!) {
    getConversation(input: $input) {
      conversation {
        id
        botId
        answers {
          id
          createdAt
          content
          interaction {
            id
            content
          }
        }
      }
      nextInteraction {
        id
        content
      }
    }
  }
`;

export default getConversation;
