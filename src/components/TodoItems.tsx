import { VStack, HStack, Checkbox, Box } from '@chakra-ui/react';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';

import CustomButton from './CustomButton';

type Props = {
  todoItems: string[];
  todoStatus: boolean[];
  setTodoStatus: Dispatch<SetStateAction<boolean[]>>;
};

const TodoItems = (props: Props) => {
  const handleTodoStatus = (event: ChangeEvent<HTMLInputElement>) => {
    const newTodoStatus = [...props.todoStatus];
    const elementNumber = +event.target.value;
    newTodoStatus[elementNumber] = !newTodoStatus[elementNumber];
    props.setTodoStatus(newTodoStatus);
  };

  return (
    <VStack>
      {props.todoItems.map((todoItem, index) => (
        <Box key={todoItem} w="500px" h="50px" p={5} shadow="md" borderWidth="1px">
          <HStack>
            <Checkbox value={index} onChange={handleTodoStatus} />
            <CustomButton isDone={props.todoStatus[index]}>{todoItem}</CustomButton>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default TodoItems;
