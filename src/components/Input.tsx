import React from "react";

type IProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

const Input: React.FC<IProps> = ({ todo, setTodo }) => {
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
      <button>Add</button>
    </>
  );
};

export default Input;
