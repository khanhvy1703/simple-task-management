import { gql } from '@apollo/client';

export const EDIT_TASK = gql`
  mutation editTask($editTask: TaskType!) {
    editTask(editTask: $editTask) {
      id
      body
      isCompleted
      createdAt
    }
  }
`;