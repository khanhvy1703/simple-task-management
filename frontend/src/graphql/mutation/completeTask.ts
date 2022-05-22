import { gql, useMutation } from "@apollo/client";
import { completeTask_completeTask, completeTaskVariables } from "./__generated__/completeTask";

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

export const useCompleteTask = () => {
  const [completeTask, { data, loading, error }] =
    useMutation<completeTask_completeTask, completeTaskVariables>(COMPLETE_TASK);

  return { completeTask, data, loading, error };
};