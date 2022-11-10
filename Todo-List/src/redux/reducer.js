import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //membuat function reducer
    
    //menambahkan todo dengan action payload
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //membuat action menghapus todo
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    // memfilter terlebih dahulu item , kemudian diberi kondisi

    //update todo
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },


    //complete todo, untuk menampilkan todo yang telah diselesaikan
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          }; // melakukan mapping dari data array agar nanti dapat ditampilkan
        }
        return todo;
      });
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;