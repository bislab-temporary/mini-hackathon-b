import { VStack, Checkbox } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction, ChangeEvent } from 'react';

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
      {props.todoItems.map((todoItem, index) =>
        props.todoStatus[index] === false ? (
          <Checkbox
            key={todoItem}
            value={index}
            w="500px"
            h="50px"
            p={5}
            shadow="md"
            borderWidth="1px"
            onChange={handleTodoStatus}
          >
            {todoItem}
          </Checkbox>
        ) : (
          <Checkbox
            key={todoItem}
            value={index}
            w="500px"
            h="50px"
            p={5}
            shadow="md"
            borderWidth="1px"
            as="del"
            bg="gray.300"
            onChange={handleTodoStatus}
          >
            {todoItem}
          </Checkbox>
        )
      )}
    </VStack>
  );
};

export default TodoItems;
