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
import React, { Dispatch, SetStateAction } from 'react';

import { TodoType } from '@/types/TodoType';

type Props = {
  listName: string;
  todoList: TodoType[];
  setTodoList: Dispatch<SetStateAction<TodoType[]>>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TodoList = ({ listName, todoList, setTodoList }: Props) => {
  const handleTodoStatus = (no: number) => {
    const newTodoList: TodoType[] = [];
    todoList.forEach((todoItem: TodoType) => {
      if (todoItem.no === no) {
        todoItem.status = !todoItem.status;
      }
      newTodoList.push(todoItem);
    });
    setTodoList(newTodoList);
  };

  const handleDeleteTodoItem = (no: number) => {
    const newTodoList: TodoType[] = [];
    todoList.forEach((todoItem: TodoType) => {
      if (todoItem.no !== no) {
        newTodoList.push(todoItem);
      }
    });
    setTodoList(newTodoList);
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
      {todoList.map((todoItem: TodoType, index: number) => (
        <Box key={todoItem.no} w="500px" h="60px" p={5} shadow="md" borderWidth="1px">
          <HStack w="100%" h="100%" justifyContent="space-between">
            <Checkbox value={index} onChange={() => handleTodoStatus(todoItem.no)} />
            <Editable defaultValue={todoItem.item} isPreviewFocusable={false}>
              {todoItem.status === false ? <EditablePreview /> : <EditablePreview as="del" />}
              <EditableInput />
              <EditableControls />
            </Editable>
            <IconButton
              colorScheme="red"
              size="xs"
              aria-label="Delete"
              icon={<CloseIcon />}
              value={index}
              onClick={() => handleDeleteTodoItem(todoItem.no)}
            />
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};

export default TodoList;
