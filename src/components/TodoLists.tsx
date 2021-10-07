import { HStack } from '@chakra-ui/layout';
import { Dispatch, SetStateAction } from 'react';

import TodoList from './TodoList';

type Props = {
  todoItems: string[];
  setTodoItems: Dispatch<SetStateAction<string[]>>;
  todoStatus: boolean[];
  setTodoStatus: Dispatch<SetStateAction<boolean[]>>;
  doingItems: string[];
  doingStatus: boolean[];
  setDoingStatus: Dispatch<SetStateAction<boolean[]>>;
  doneItems: string[];
  doneStatus: boolean[];
  setDoneStatus: Dispatch<SetStateAction<boolean[]>>;
};

const TodoLists = ({
  todoItems,
  setTodoItems,
  todoStatus,
  setTodoStatus,
  doingItems,
  doingStatus,
  setDoingStatus,
  doneItems,
  doneStatus,
  setDoneStatus,
}: Props) => {
  return (
    <HStack spacing="24px" overflowX="scroll" align="start">
      <TodoList
        todoItems={todoItems}
        setTodoItems={setTodoItems}
        todoStatus={todoStatus}
        setTodoStatus={setTodoStatus}
      />
      <TodoList
        todoItems={doingItems}
        setTodoItems={setTodoItems}
        todoStatus={doingStatus}
        setTodoStatus={setDoingStatus}
      />
      <TodoList
        todoItems={doneItems}
        setTodoItems={setTodoItems}
        todoStatus={doneStatus}
        setTodoStatus={setDoneStatus}
      />
    </HStack>
  );
};

export default TodoLists;
