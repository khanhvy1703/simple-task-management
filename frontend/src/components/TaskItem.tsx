import React from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { Task } from '../types/TaskType';
import { useEditTask } from '../graphql/mutation/editTask';
import { useCompleteTask } from '../graphql/mutation/completeTask';

const TaskItem = (props: Task) => {
  const { editTask } = useEditTask();
  const { completeTask } = useCompleteTask();
  const [isEdit, setEdit] = React.useState(false);
  const [isChange, setChange] = React.useState(false);
  const [isComplete, setComplte] = React.useState(false);
  const [newBody, setNewBody] = React.useState(props.body);
  const [taskID] = React.useState<string>(props.id || '');

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    setEdit(true);
    setChange(true);
  };

  const handleChange = (e: React.MouseEvent) => {
    e.preventDefault();
    if (taskID) {
      editTask({
        variables: {
          editTask: {
            id: props.id,
            body: newBody,
            isCompleted: props.isCompleted,
          },
        },
      });
    }
  };

  const handleComplete = (e: React.MouseEvent) => {
    e.preventDefault();
    if (taskID) {
      completeTask({
        variables: {
          completeTask: {
            id: props.id,
            body: props.body,
            isCompleted: isComplete
          }
        }
      })
    }
    if (isComplete) setComplte(false);
    else setComplte(true);
  };

  return (
    <Box w={'70%'} bg='green.400'>
      {isEdit ? (
        <Input
          fontSize='xl'
          variant='unstyled'
          onChange={(e) => setNewBody(e.target.value)}
          value={newBody}
        />
      ) : (
        <Text onClick={(e) => handleComplete(e)} decoration={isComplete? 'line-through' : 'none'} className='click'>{newBody}</Text>
      )}

      {isChange ? (
        <Button className='click' onClick={(e) => handleChange(e)}>
          change
        </Button>
      ) : (
        <Button className='click' onClick={(e) => handleEdit(e)}>
          edit
        </Button>
      )}
    </Box>
  );
};

export default TaskItem;
