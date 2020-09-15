import { gql } from 'apollo-server-express';

const createAnswer = gql`
  mutation createAnswer($input: CreateAnswerInput!) {
    createAnswer(input: $input) {
      answer {
        id
        content
      }
    }
  }
`;

export default createAnswer;
