/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import InputBar from './components/InputBar';
import TodoLists from './components/TodoLists';
import { TodoType } from './types/TodoType';

const App = (): JSX.Element => {
  const [todoList, setTodoList] = useState<TodoType[]>([
    { no: 1, status: false, item: 'Todo1' },
    { no: 2, status: false, item: 'Todo2' },
    { no: 3, status: false, item: 'Todo3' },
  ]);
  const [doingList, setdoingList] = useState<TodoType[]>([
    { no: 4, status: false, item: 'Doing1' },
    { no: 5, status: false, item: 'Doing2' },
    { no: 6, status: false, item: 'Doing3' },
  ]);
  const [doneList, setDoneList] = useState<TodoType[]>([
    { no: 7, status: false, item: 'Done1' },
    { no: 8, status: false, item: 'Done2' },
    { no: 9, status: false, item: 'Done3' },
  ]);

  return (
    <>
      <InputBar todoList={todoList} setTodoList={setTodoList} />
      <TodoLists
        todoList={todoList}
        setTodoList={setTodoList}
        doingList={doingList}
        setDoingList={setDoingList}
        doneList={doneList}
        setDoneList={setDoneList}
      />
    </>
  );
};
export default App;
