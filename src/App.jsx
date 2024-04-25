import { useState } from "react";
import AddItem from "./Components/AddItem";
import ItemsList from "./Components/ItemsList";

function App() {
  const [todoList, setTodoList] = useState([]);

  let addList = (todo) => {
    if(todo !== '')
    setTodoList([...todoList, todo]);
    console.log(todoList);
  };

   const deleteListItem =(key) =>{
    let newListTodo = [...todoList];
    newListTodo.splice(key,1);
    setTodoList([...newListTodo])
   }
  return (
    <div className=" h-full">
      <div className="bg-slate-200 h-max">
        <div className="bg-slate-400 p-8 text-center items-center sm:text-xl font-bold ">
          <h1>Todo list </h1>
        </div>

        <div className="flex row-auto items-start justify-start p-4">
          <AddItem add={addList} />
        </div>

       {todoList.map((Listitem,i)=>{
        return (
          <ItemsList item={Listitem} index={i} key={i} deleteItem={deleteListItem}/>
        )
           
           
       })
      }
      </div>
    </div>
  );
}

export default App;
