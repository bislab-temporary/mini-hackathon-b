import { HStack } from '@chakra-ui/layout';
import React, { useState } from 'react';

import InputBar from './components/InputBar';
import TodoItems from './components/TodoItems';

const App = (): JSX.Element => {
  const [todoItems, setTodoItems] = useState<string[]>([]);
  const [todoStatus, setTodoStatus] = useState<boolean[]>([]);

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
        <TodoItems todoItems={todoItems} todoStatus={todoStatus} setTodoStatus={setTodoStatus} />
        <TodoItems todoItems={todoItems} todoStatus={todoStatus} setTodoStatus={setTodoStatus} />
      </HStack>
    </>
  );
};
export default App;
