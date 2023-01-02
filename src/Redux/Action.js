import * as types from "./ActionType";
import axios from "axios";

const getUser = (user) => ({
  type: types.GET_USER,
  payload: user
});
const deleteUser = (user) => ({
    type: types.DELETE_USER,

  });

  const addeduser=()=>({
    type: types.ADD_USER
  })

  const userEdit=()=>({
    type: types.EDIT_USER
  })


export const lodUser = () => {
  return function (dispacth) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((resp) => {
        console.log("res", resp);
        dispacth(getUser(resp.data));
      })
      .catch((err) => console.log(err));
  };
};


export const delUser = (id) => {
    return function (dispacth) {
      axios
        .delete(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) => {
          dispacth(deleteUser());
          dispacth(lodUser())
        })
        .catch((err) => console.log(err));
    };
  };



  export const addUser = (user) => {
    return function (dispacth) {
      axios
        .post(`${process.env.REACT_APP_API}`,user)
        .then((resp) => {
          dispacth(addeduser());
          dispacth(lodUser())
        })
        .catch((err) => console.log(err));
    };
  };

  export const editUser = (id) => {
    return function (dispacth) {
      axios
        .get(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) => {
          dispacth(userEdit(resp.data));
          dispacth(lodUser())
        })
        .catch((err) => console.log(err));
    };
  };

