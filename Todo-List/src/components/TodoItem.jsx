import { motion } from "framer-motion";
import React, { useRef } from "react";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      
      <div className="btns">
        <button 
        onClick={() => changeFocus()}>edit</button>
        
        {item.completed === false && (
          <button 
          onClick={() => completeTodo(item.id)}>done</button>
        )}
        <button 
        onClick={() => removeTodo(item.id)}>delete</button>
      </div>
      {item.completed && <span className="completed">Sudah Dikerjakan</span>}
    </motion.li>
  );
};

export default TodoItem;