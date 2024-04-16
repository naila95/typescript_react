import React from "react";

type IProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addMessage: () => void;
};

const Input: React.FC<IProps> = ({ todo, setTodo, addMessage }) => {
  return (
    <>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
        placeholder="name"
      />
      <button onClick={addMessage}>Add</button>
    </>
  );
};

export default Input;
