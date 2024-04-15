import { useState } from "react";
import Input from "./components/Input";
import { Todos } from "./types/Type";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);
  const [arr, setArr] = useState<string[]>([""]);

  // let name: string = "Naila";
  // let age: number = 28;
  // let done: boolean = true;
  // let check: any = "smthg";
  // let options: number | string = 24;

  interface Obj {
    name: string;
    age: number;
    isMarried: boolean;
    accept?: boolean;
  }

  interface Obj2 extends Obj {
    added?: boolean;
  }

  let obj: Obj2 = {
    name: "Jhon",
    age: 30,
    isMarried: true,
  };

  return (
    <>
      {/* <h1>{name + ", yash:" + age}</h1> */}
      <Input todo={todo} setTodo={setTodo} />
      <h1>{todo}</h1>
    </>
  );
};

export default App;
