import { Editable, EditableProps } from '@chakra-ui/editable';

type CustomProps = {
  isDone: boolean;
};

type Props = EditableProps & CustomProps;

// props として受け取った isDone によって表示を変えるコンポーネント
const CustomButton = (props: Props) => {
  const { isDone } = props;

  return isDone ? (
    <Editable as="del" {...props} /> // ここで color と as を指定しちゃう
  ) : (
    <Editable {...props} />
  );
};

export default CustomButton;
