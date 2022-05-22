import { gql } from "@apollo/client";

export const GET_ALL_TASKS = gql`
  query getAllTasks {
    tasks {
      id
      body
      isCompleted
      createdAt
    }
  }
`;