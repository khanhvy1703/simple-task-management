import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation createTask($createTask: TaskType!) {
    createTask(createTask: $createTask) {
      id
      body
      isCompleted
      createdAt
    }
  }
`;