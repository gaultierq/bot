import { gql } from 'apollo-server-express';

const createInteraction = gql`
  mutation createInteraction($input: CreateInteractionInput!) {
    createInteraction(input: $input) {
      interaction {
        id
        content
      }
    }
  }
`;

export default createInteraction;
