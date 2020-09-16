import { gql } from 'apollo-server-express';

const nextInteraction = gql`
    query nextInteraction($input: NextInteractionInput!) {
        nextInteraction(input: $input) {
            interaction {
                id
                content
            }
        }
    }
`;

export default nextInteraction;
