import React from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import { GET_ALL_TASKS } from '../graphql/query/getAllTasks';
import { useQuery } from '@apollo/client';
import { getAllTasks } from '../graphql/query/__generated__/getAllTasks';
import TaskItem from '../components/TaskItem';
import { useCreateTask } from '../graphql/mutation/createTask';

const MainScreen = () => {
  const { data, error, loading } = useQuery<getAllTasks>(GET_ALL_TASKS);
  const { createTask } = useCreateTask();
  const [newTask, setNewTask] = React.useState('');

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    createTask({
      variables: {
        createTask: {
          body: newTask,
        },
      },
    });
    setNewTask('');
  };

  if (loading) return <Box>Loading....</Box>;
  if (error) return <Box>Loading....</Box>;

  return (
    <Box w={'50%'} height={'100vh'} bg='gray.400'>
      {data?.tasks.map((task, index) => {
        return (
          <Box key={task.id}>
            <TaskItem {...task} />
          </Box>
        );
      })}
      <Box>
        <Input
          fontSize='xl'
          variant='unstyled'
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <Button className='click' onClick={(e) => handleAdd(e)}>
          add
        </Button>
      </Box>
    </Box>
  );
};

export default MainScreen;
