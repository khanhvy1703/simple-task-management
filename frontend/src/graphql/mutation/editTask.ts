import { gql, useMutation } from '@apollo/client';
import { editTask_editTask, editTaskVariables } from './__generated__/editTask';

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

export const useEditTask = () => {
  const [editTask, { data, loading, error }] =
    useMutation<editTask_editTask, editTaskVariables>(EDIT_TASK);

  return { editTask, data, loading, error };
};