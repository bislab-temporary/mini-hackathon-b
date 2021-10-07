import { HStack } from '@chakra-ui/layout';
import { Dispatch, SetStateAction } from 'react';
import { DragDropContext, DraggableLocation, DropResult } from 'react-beautiful-dnd';

import TodoList from './TodoList';

import { TodoType } from '@/types/TodoType';

type Props = {
  todoList: TodoType[];
  setTodoList: Dispatch<SetStateAction<TodoType[]>>;
  doingList: TodoType[];
  setDoingList: Dispatch<SetStateAction<TodoType[]>>;
  doneList: TodoType[];
  setDoneList: Dispatch<SetStateAction<TodoType[]>>;
};

const TodoLists = ({
  todoList,
  setTodoList,
  doingList,
  setDoingList,
  doneList,
  setDoneList,
}: Props) => {
  const getList = (droppableId: string): [TodoType[], Dispatch<SetStateAction<TodoType[]>>] => {
    if (droppableId === 'Todo') {
      return [todoList, setTodoList];
    } else if (droppableId === 'Doing') {
      return [doingList, setDoingList];
    } else {
      return [doneList, setDoneList];
    }
  };

  const reorder = (list: TodoType[], startIndex: number, endIndex: number): TodoType[] => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const move = (
    source: TodoType[],
    destination: TodoType[],
    droppableSource: DraggableLocation,
    droppableDestination: DraggableLocation
  ): [TodoType[], TodoType[]] => {
    const sourceClone = [...source];
    const destClone = [...destination];
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    return [sourceClone, destClone];
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      // ドロップ対象領域外にドロップした場合
      return;
    }
    if (source.droppableId === destination.droppableId) {
      // 同じリスト内で移動した場合
      const [list, setList] = getList(source.droppableId);
      const newList = reorder(list, source.index, destination.index);
      setList(newList);
    } else {
      // 異なるリスト間で移動した場合
      const [sourceList, setSourcelist] = getList(source.droppableId);
      const [destinationList, setDestinationList] = getList(destination.droppableId);
      const [newSourceList, newDestinationList]: [TodoType[], TodoType[]] = move(
        sourceList,
        destinationList,
        source,
        destination
      );
      setSourcelist(newSourceList);
      setDestinationList(newDestinationList);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <HStack spacing="24px" overflowX="scroll" align="start">
        <TodoList listName="Todo" todoList={todoList} setTodoList={setTodoList} />
        <TodoList listName="Doing" doingList={doingList} setDoingList={setDoingList} />
        <TodoList listName="Done" doneList={doneList} setDoneList={setDoingList} />
      </HStack>
    </DragDropContext>
  );
};

export default TodoLists;
