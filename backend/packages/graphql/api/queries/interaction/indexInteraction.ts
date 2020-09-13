import { gql } from 'apollo-server-express';

const indexInteraction = gql`
  query indexInteraction {
    indexInteraction {
      interactions {
        id
        content
      }
    }
  }
`;

export default indexInteraction;
