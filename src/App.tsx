/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import InputBar from './components/InputBar';
import TodoLists from './components/TodoLists';

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
      <TodoLists
        todoItems={todoItems}
        todoStatus={todoStatus}
        setTodoStatus={setTodoStatus}
        doingItems={doingItems}
        doingStatus={doingStatus}
        setDoingStatus={setDoingStatus}
        doneItems={doneItems}
        doneStatus={doneStatus}
        setDoneStatus={setDoneStatus}
      />
    </>
  );
};
export default App;
