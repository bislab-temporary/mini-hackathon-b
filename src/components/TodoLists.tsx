import { HStack } from '@chakra-ui/layout';
import { Dispatch, SetStateAction } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import TodoList from './TodoList';

type Props = {
  todoItems: string[];
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
  todoStatus,
  setTodoStatus,
  doingItems,
  doingStatus,
  setDoingStatus,
  doneItems,
  doneStatus,
  setDoneStatus,
}: Props) => {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      // ドロップ対象領域外にドロップした場合
      return;
    }
    // TODO: タスクの移動処理を記述
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <HStack spacing="24px" overflowX="scroll" align="start">
        <TodoList
          statusName="Todo"
          todoItems={todoItems}
          todoStatus={todoStatus}
          setTodoStatus={setTodoStatus}
        />
        <TodoList
          statusName="Doing"
          todoItems={doingItems}
          todoStatus={doingStatus}
          setTodoStatus={setDoingStatus}
        />
        <TodoList
          statusName="Done"
          todoItems={doneItems}
          todoStatus={doneStatus}
          setTodoStatus={setDoneStatus}
        />
      </HStack>
    </DragDropContext>
  );
};

export default TodoLists;
