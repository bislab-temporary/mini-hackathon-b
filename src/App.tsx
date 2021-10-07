/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import InputBar from './components/InputBar';
import TodoLists from './components/TodoLists';

const App = (): JSX.Element => {
  const [todoItems, setTodoItems] = useState<string[]>(['Todo1', 'Todo2', 'Todo3']);
  const [todoStatus, setTodoStatus] = useState<boolean[]>([false, false, false]);
  const [doingItems, setDoingItems] = useState<string[]>(['Doing1', 'Doing2', 'Doing3']);
  const [doingStatus, setDoingStatus] = useState<boolean[]>([false, false, false]);
  const [doneItems, setDoneItems] = useState<string[]>(['Done1', 'Done2', 'Done3']);
  const [doneStatus, setDoneStatus] = useState<boolean[]>([false, false, false]);

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
        setTodoItems={setTodoItems}
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
