import { gql, useMutation } from "@apollo/client";
import { GET_ALL_TASKS } from "../query/getAllTasks";
import { getAllTasks } from "../query/__generated__/getAllTasks";
import { createTaskVariables, createTask_createTask } from "./__generated__/createTask";

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

export const useCreateTask = () => {
  const [createTask, { data, loading, error }] = useMutation<
  createTask_createTask, 
  createTaskVariables
  >(CREATE_TASK, {
    update(cache, { data }) {
      const existingsTasks: getAllTasks = cache.readQuery({ query: GET_ALL_TASKS }) ?? { tasks: [] };

      if (data) {
        const newTasksList = [
          ...existingsTasks.tasks,
          {
            id: data?.id,
            body: data?.body,
            isCompleted: data?.isCompleted,
            createdAt: data?.createdAt,
          },
        ];

        cache.writeQuery({
          query: GET_ALL_TASKS,
          data: {
            tasks: newTasksList,
          },
        });
      }
    },
  });

  return { createTask, data, loading, error };
};