import { gql } from 'apollo-server-express';

const deleteInteraction = gql`
  mutation deleteInteraction($input: DeleteInteractionInput!) {
    deleteInteraction(input: $input) {
      interaction {
        id
        content
      }
    }
  }
`;

export default deleteInteraction;
