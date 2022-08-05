import { useState } from "react";
import "./app.scss";
import {List} from "./components";
import {ListItem} from "./components";

function App() {

  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")) || []);

  const handleInputValue = (evt) => {
    if (evt.code === "Enter") {
      const newTodo = {
        id: todos.at(-1)?.id ? todos.at(-1).id + 1 : 1,
        text: evt.target.value,
        isComplated: false
      }

      setTodos([...todos,newTodo]);
      evt.target.value = "";
    }
  }

  window.localStorage.setItem("todos", JSON.stringify(todos))


  return (
    <div className="App">
      <input className="input" onKeyUp={handleInputValue} type="text" placeholder="Todo..."/>
      {todos.length > 0 && <List>
        {
          todos.map(e => (
            <ListItem key={e.id} item={e} todos={todos} setTodos={setTodos}/>
          ))
        }
      </List>}
    </div>
  );
}

export default App;
