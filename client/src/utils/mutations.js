import { gql } from '@apollo/client'

export const CREATE_CONTACT = gql`
mutation createContact($name: String!, $email: String!) {
    createContact(name: $name, email: $email) {
        token
        contact {
            name
            email
        }
    }
}`;