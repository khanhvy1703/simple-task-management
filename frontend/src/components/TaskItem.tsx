import React from 'react';
import { Box, Input, Text } from '@chakra-ui/react';
import { CheckIcon, EditIcon } from '@chakra-ui/icons';
import { Task } from '../helpers/TaskType';
import { useEditTask } from '../graphql/mutation/editTask';
import { useCompleteTask } from '../graphql/mutation/completeTask';

const TaskItem = (props: Task) => {
  const { editTask } = useEditTask();
  const { completeTask } = useCompleteTask();
  const [isEdit, setEdit] = React.useState(false);
  const [isChange, setChange] = React.useState(false);
  const [isComplete, setComplte] = React.useState(props.isCompleted);
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
    setChange(false);
    setEdit(false);
  };

  const handleComplete = (e: React.MouseEvent) => {
    e.preventDefault();
    if (taskID) {
      completeTask({
        variables: {
          completeTask: {
            id: props.id,
            body: props.body,
            isCompleted: isComplete,
          },
        },
      });
    }
    if (isComplete) setComplte(false);
    else setComplte(true);
  };

  return (
    <Box
      w='100%'
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      p={4}
    >
      {isEdit ? (
        <Input
          fontSize='xl'
          variant='unstyled'
          onChange={(e) => setNewBody(e.target.value)}
          value={newBody}
          fontWeight={400}
        />
      ) : (
        <Text
          onClick={(e) => handleComplete(e)}
          decoration={isComplete ? 'line-through' : 'none'}
          className='click'
          fontSize='xl'
          fontWeight={500}
        >
          {newBody}
        </Text>
      )}

      {isChange ? (
        <CheckIcon w={6} h={6} className='click' onClick={handleChange} />
      ) : isComplete ? (
        <></>
      ) : (
        <EditIcon w={6} h={6} className='click' onClick={handleEdit} />
      )}
    </Box>
  );
};

export default TaskItem;
