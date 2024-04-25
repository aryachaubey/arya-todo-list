import React from "react";
import { MdDeleteOutline } from "react-icons/md";


function ItemsList({ todo, item ,deleteItem,index}) {
  return (
    <div className="items-start justify start p-3">
      <div className="flex  flex-row justify-between rounded border-solid border-black bg-slate-700 text-white p-4">
        <div>{item}
       </div>
       <div className="bg-red-500 text-white rounded-sm p-1  text-sm items-end ">
          <button onClick={()=>deleteItem(index)}><MdDeleteOutline/></button>
        </div>
       
      </div>
    </div>
  );
}

export default ItemsList;
