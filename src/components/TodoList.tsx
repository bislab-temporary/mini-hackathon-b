import { VStack, HStack, Checkbox, Box } from '@chakra-ui/react';
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Draggable, DraggableProvided, Droppable, DroppableProvided } from 'react-beautiful-dnd';

import CustomButton from './CustomButton';

type Props = {
  statusName: string;
  todoItems: string[];
  todoStatus: boolean[];
  setTodoStatus: Dispatch<SetStateAction<boolean[]>>;
};

const TodoList = (props: Props) => {
  const handleTodoStatus = (event: ChangeEvent<HTMLInputElement>) => {
    const newTodoStatus = [...props.todoStatus];
    const elementNumber = +event.target.value;
    newTodoStatus[elementNumber] = !newTodoStatus[elementNumber];
    props.setTodoStatus(newTodoStatus);
  };

  return (
    <Droppable droppableId={props.statusName}>
      {(provided: DroppableProvided) => (
        <VStack {...provided.droppableProps} ref={provided.innerRef}>
          {props.todoItems.map((todoItem, index) => (
            <Draggable key={index} draggableId={props.statusName + String(index)} index={index}>
              {(provided: DraggableProvided) => (
                <Box
                  key={todoItem}
                  w="500px"
                  h="50px"
                  p={5}
                  shadow="md"
                  borderWidth="1px"
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                >
                  <HStack>
                    <Checkbox value={index} onChange={handleTodoStatus} />
                    <CustomButton isDone={props.todoStatus[index]}>{todoItem}</CustomButton>
                  </HStack>
                </Box>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </VStack>
      )}
    </Droppable>
  );
};

export default TodoList;
