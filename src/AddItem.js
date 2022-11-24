import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react"; 

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form
      className="container d-flex align-content-center my-2"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control"
        autoFocus
        ref={inputRef}
        id="addItem"
        type="text"
        placeholder="Item name"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-success ms-2"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
