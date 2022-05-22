import { gql } from '@apollo/client';

export const GET_TASK_BY_ID = gql`
  query getTaskById($taskId: String!) {
    tasks(id: $taskId) {
      id
      body
      isCompleted
      createdAt
    }
  }
`;