import { BoardSquare } from './Square.styled';

export default function Square({ value, onSquareClick }) {
  return (
    <BoardSquare className="square" onClick={onSquareClick}>
      {value}
    </BoardSquare>
  );
}
