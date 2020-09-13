import { gql } from 'apollo-server-express';

const getInteraction = gql`
  query getInteraction($input: GetInteractionInput!) {
    getInteraction(input: $input) {
      interaction {
        id
        content
      }
    }
  }
`;

export default getInteraction;
