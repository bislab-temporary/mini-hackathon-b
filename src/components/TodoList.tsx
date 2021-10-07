/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import {
  VStack,
  HStack,
  Checkbox,
  Box,
  ButtonGroup,
  IconButton,
  Flex,
  Editable,
  EditableInput,
  EditablePreview,
  useEditableControls,
} from '@chakra-ui/react';
import React, {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  MouseEventHandler,
  MouseEvent,
} from 'react';

type Props = {
  todoItems: string[];
  setTodoItems: Dispatch<SetStateAction<string[]>>;
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

  const handleDeleteTodoItem = (index: number) => {
    console.log(index);
    const newTodoItems = [...props.todoItems];
    newTodoItems.splice(index, 1);
    props.setTodoItems(newTodoItems);
  };

  const EditableControls = () => {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
      useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="xs">
        <IconButton aria-label="Check" icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton aria-label="Close" icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton aria-label="Edit" size="xs" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  };

  return (
    <VStack>
      {props.todoItems.map((todoItem, index) => (
        <Box key={todoItem} w="500px" h="60px" p={5} shadow="md" borderWidth="1px">
          <HStack w="100%" h="100%" justifyContent="space-between">
            <Checkbox value={index} onChange={handleTodoStatus} />
            <Editable defaultValue={todoItem} isPreviewFocusable={false}>
              {props.todoStatus[index] === false ? (
                <EditablePreview />
              ) : (
                <EditablePreview as="del" />
              )}
              <EditableInput />
              <EditableControls />
            </Editable>
            <IconButton
              colorScheme="red"
              size="xs"
              aria-label="Delete"
              icon={<CloseIcon />}
              value={index}
              onClick={() => handleDeleteTodoItem(index)}
            />
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default TodoList;
