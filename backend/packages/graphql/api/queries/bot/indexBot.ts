import { gql } from 'apollo-server-express';

const indexBot = gql`
    query indexBot {
        indexBot {
            bots {
                id
                published
                title
                author {
                    id
                }
            }
        }
    }
`;

export default indexBot;
