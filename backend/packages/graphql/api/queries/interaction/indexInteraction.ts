import { gql } from 'apollo-server-express';

const indexInteraction = gql`
  query indexInteraction($input: IndexInteractionInput!) {
    indexInteraction(input: $input) {
      interactions {
        id
        content
      }
    }
  }
`;

export default indexInteraction;
