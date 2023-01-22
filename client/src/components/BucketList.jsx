import React from "react";
import "./budgetlist.css";
import useBucketListStore from "../stores/bucketListStore";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const BucketList = () => {
  const addListItemHandler = useBucketListStore((state) => state.addItem);
  function addItemHandler() {
    const item = prompt("Enter the item you want to add");
    if (!item) {
      alert("Input cannot be empty");
      addItemHandler();
    }
    addListItemHandler(item);
  }

  const resetListHandler = useBucketListStore((state) => state.clear);
  function resetHandler() {
    resetListHandler();
  }
  const listItems = useBucketListStore((state) => state.listItems);

  function toggleItem(id) {
    // listItems.map((item, index) => {
    //   if (index === id) {
    //     if(item[0]=='<') {
    //       item = item.slice(4);
    //     } else {
    //       item.innerHTML = '<strike>' + item + '</strike>';
    //       // item = item + '.strike()';
    //     }
    //     console.log(item);
    //     return ;
    //   }
    // })
    const item = document.getElementById(id);
    if (item.innerHTML[0] === "<") {
      item.innerHTML = item.innerText;
    } else {
      item.innerHTML = "<strike>" + item.innerText + "</strike>";
    }
  }

  const Navigate = useNavigate();
  const back = (e) => {
    e.preventDefault();
    Navigate(-1);
  };

  return (
    <div className="bucket">
      <div className="btn" onClick={back}>
        <BiArrowBack />
      </div>
      <div className="content">
        <h2>Bucket List</h2>
        <div className="bucketList">
          {listItems.map((item, id) => (
            <div
              className="bucketListItem"
              id={id}
              key={id}
              onClick={() => toggleItem(id)}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
        <button onClick={addItemHandler}>Add Item in the list</button>
        <button onClick={resetHandler}>Reset/Clear List</button>
        {console.log(listItems)}
      </div>
    </div>
  );
};

export default BucketList;
