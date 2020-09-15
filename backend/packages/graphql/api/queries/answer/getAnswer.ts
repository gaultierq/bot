import { gql } from 'apollo-server-express';

const getAnswer = gql`
  query getAnswer($input: GetAnswerInput!) {
    getAnswer(input: $input) {
      answer {
        id
        content
      }
    }
  }
`;

export default getAnswer;
