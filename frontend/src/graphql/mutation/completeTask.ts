import { gql } from "@apollo/client";

export const COMPLETE_TASK = gql`
  mutation completeTask($completeTask: TaskType!) {
    completeTask(completeTask: $completeTask) {
      id
      body
      isCompleted
      createdAt
    }
  }
`;