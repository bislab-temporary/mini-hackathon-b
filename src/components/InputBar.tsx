import { Input, VStack } from '@chakra-ui/react';
import React, { useState, Dispatch, SetStateAction } from 'react';

type Props = {
  todoItems: string[];
  todoStatus: boolean[];
  setTodoItems: Dispatch<SetStateAction<string[]>>;
  setTodoStatus: Dispatch<SetStateAction<boolean[]>>;
};

const InputBar = (props: Props): JSX.Element => {
  const [inputText, setInputText] = useState<string>('');

  const handleSubmit = (): void => {
    const newTodoItems = [...props.todoItems, inputText];
    props.setTodoItems(newTodoItems);
    const newTodoStatus = [...props.todoStatus, false];
    props.setTodoStatus(newTodoStatus);
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
