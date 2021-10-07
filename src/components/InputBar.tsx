import { Input, VStack } from '@chakra-ui/react';
import React, { useState, Dispatch, SetStateAction } from 'react';

import { TodoType } from '@/types/TodoType';

type Props = {
  todoList: TodoType[];
  setTodoList: Dispatch<SetStateAction<TodoType[]>>;
};

const InputBar = ({ todoList, setTodoList }: Props) => {
  const [inputText, setInputText] = useState<string>('');

  const getMax = (todoList: TodoType[]): number => {
    let _max = -1;
    todoList.forEach((todoItem) => {
      _max = Math.max(_max, todoItem.no);
    });
    return _max;
  };

  const handleSubmit = () => {
    const no = getMax(todoList) + 1;
    const newTodoItem = { no: no, status: false, item: inputText };
    const newTodoItems = [...todoList, newTodoItem];
    setTodoList(newTodoItems);
  };

  return (
    <VStack pt="10px">
      <Input
        w="500px"
        h="50px"
        variant="outline"
        placeholder="input TODO"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSubmit();
          }
        }}
      />
    </VStack>
  );
};

export default InputBar;
