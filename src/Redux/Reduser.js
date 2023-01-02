import * as types from "./ActionType";
const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userReduser = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.DELETE_USER:
    case types.ADD_USER:
      return {
        ...state,
        loading: false,
      };
      case types.EDIT_USER:
        return{
          ...state,
          user:action.payload,
          loading:false
        }
    default:
      return state;
  }
};

export default userReduser;
