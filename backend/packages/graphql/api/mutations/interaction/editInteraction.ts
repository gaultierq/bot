import { gql } from 'apollo-server-express';

const editInteraction = gql`
  mutation editInteraction($input: EditInteractionInput!) {
    editInteraction(input: $input) {
      interaction {
        id
        content
      }
    }
  }
`;

export default editInteraction;
