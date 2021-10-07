/* eslint-disable @typescript-eslint/no-unused-vars */
import { HStack } from '@chakra-ui/layout';
import React, { useState } from 'react';

import InputBar from './components/InputBar';
import TodoItems from './components/TodoItems';

const App = (): JSX.Element => {
  const [todoItems, setTodoItems] = useState<string[]>([]);
  const [todoStatus, setTodoStatus] = useState<boolean[]>([]);
  const [doingItems, setDoingItems] = useState<string[]>([]);
  const [doingStatus, setDoingStatus] = useState<boolean[]>([]);
  const [doneItems, setDoneItems] = useState<string[]>([]);
  const [doneStatus, setDoneStatus] = useState<boolean[]>([]);

  return (
    <>
      <InputBar
        todoItems={todoItems}
        todoStatus={todoStatus}
        setTodoItems={setTodoItems}
        setTodoStatus={setTodoStatus}
      />
      <HStack spacing="24px" overflowX="scroll">
        <TodoItems todoItems={todoItems} todoStatus={todoStatus} setTodoStatus={setTodoStatus} />
        <TodoItems todoItems={doingItems} todoStatus={doingStatus} setTodoStatus={setDoingStatus} />
        <TodoItems todoItems={doneItems} todoStatus={doneStatus} setTodoStatus={setDoneStatus} />
      </HStack>
    </>
  );
};
export default App;
