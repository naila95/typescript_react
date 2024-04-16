import { useState } from "react";
import Input from "./components/Input";
import { Todos } from "./types/Type";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);
  // const [arr, setArr] = useState<string[]>([""]);

  const addMessage = () => {
    if (todo) setTodos([...todos, { message: todo, id: todos.length + 1 }]);
    setTodo("");
  };

  const deleteMsg = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  console.log(todos);

  // let name: string = "Naila";
  // let age: number = 28;
  // let done: boolean = true;
  // let check: any = "smthg";
  // let options: number | string = 24;

  // interface Obj {
  //   name: string;
  //   age: number;
  //   isMarried: boolean;
  //   accept?: boolean;
  // }

  // interface Obj2 extends Obj {
  //   added?: boolean;
  // }

  // let obj: Obj2 = {
  //   name: "Jhon",
  //   age: 30,
  //   isMarried: true,
  // };

  return (
    <>
      {/* <h1>{name + ", yash:" + age}</h1> */}
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo} />
      <div>
        <ul style={{ width: "20%" }}>
          {todos.map((todo: any) => {
            return (
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                key={todo.id}
              >
                {todo.message}
                <p
                  onClick={() => {
                    deleteMsg(todo.id);
                  }}
                  style={{ cursor: "pointer", color: "red" }}
                >
                  X
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
