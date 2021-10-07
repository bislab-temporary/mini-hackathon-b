import React, { useState } from 'react';

import InputBar from './components/InputBar';
import TodoItems from './components/TodoItems';

const App = () => {
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
      <TodoItems todoItems={todoItems} todoStatus={todoStatus} setTodoStatus={setTodoStatus} />
    </>
  );
};
export default App;
