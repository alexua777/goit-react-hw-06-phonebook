import { createAction } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";

const addPhone = createAction("phone/add", function prepare(name, number) {
  return {
    payload: {
      id: uuid(),
      name,
      number
    }
  };
});

const removePhone = createAction("phone/remove", id => ({
  payload: {
    id
  }
}));

const filterPhone = createAction("phone/filter");


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


