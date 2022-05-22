import React from 'react';
import {
  Avatar,
  Box,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react';
import { GET_ALL_TASKS } from '../graphql/query/getAllTasks';
import { useQuery } from '@apollo/client';
import { getAllTasks } from '../graphql/query/__generated__/getAllTasks';
import TaskItem from '../components/TaskItem';
import { useCreateTask } from '../graphql/mutation/createTask';
import { getDayOfWeek, getDateOfWeek } from '../helpers/helpers';
import Line from '../components/Line';
import { AddIcon } from '@chakra-ui/icons';

const MainScreen = () => {
  const { data, error, loading } = useQuery<getAllTasks>(GET_ALL_TASKS);
  const { createTask } = useCreateTask();
  const [newTask, setNewTask] = React.useState('');

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (newTask) {
      createTask({
        variables: {
          createTask: {
            body: newTask,
          },
        },
      });
      setNewTask('');
    } else {
      alert('Task is empty!');
    }
  };

  if (loading) return <Box>Loading....</Box>;
  if (error) return <Box>Loading....</Box>;

  return (
    <Box w={'40%'} height={'100vh'} p={8}>
      <Box
        w='100%'
        p='5'
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
      >
        <Box>
          <Heading as='h4' size='xl'>
            {getDayOfWeek()}
          </Heading>
          <Text fontSize='xl'>{getDateOfWeek()}</Text>
        </Box>

        <Avatar
          name='Victoria Le'
          bg='blackAlpha.500'
          size='lg'
          marginTop='1'
        />
      </Box>
      <Line />
      <Box overflowY='auto' maxHeight={'75%'}>
        {data?.tasks.map((task, index) => {
          return index === data?.tasks.length - 1 ? (
            <Box key={task.id}>
              <TaskItem {...task} />
            </Box>
          ) : (
            <Box key={task.id}>
              <TaskItem {...task} />
              <Line backgroundColor='lightgrey' opacity='0.5' />
            </Box>
          );
        })}
      </Box>

      {data?.tasks.length ? <Line /> : <></>}
      <Box
        marginTop={5}
        w='100%'
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
      >
        <Input
          fontSize='xl'
          variant='unstyled'
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          border='1px solid black'
          p={1}
          marginRight={5}
        />
        <AddIcon
          w={16}
          h={16}
          className='click'
          onClick={handleAdd}
          border='1px solid black'
          p={4}
          borderRadius={'50%'}
        />
      </Box>
    </Box>
  );
};

export default MainScreen;
