import { createAction } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const addPhone = createAction("contact/add", function prepare(name, number) {
  return {
    payload: {
      id: uuid(),
      name,
      number
    }
  };
});

const removePhone = createAction("contact/remove");

const filterPhone = createAction("contact/filter");


export default { addPhone, removePhone, filterPhone };

// const addPhone = (name, number) => ({
//   type: phoneTypes.ADD_PHONE,
//   payload: {
//     id: uuid(),
//     name,
//     number
//   }
// });

// const removePhone = id => {
//   return {
//     type: phoneTypes.REMOVE_PHONE,
//     payload: {
//       id
//     }
//   };
// };

// const filterPhone = filter => {
//   return {
//     type: phoneTypes.FILTER_PHONE,
//     payload: {
//       filter
//     }
//   };
// };


