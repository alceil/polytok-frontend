
const initialState = {
  user: {},
  isUserLoggedIn: false,
};

const AuthReducer = (state = initialState, action) => {
  console.log(action);
  console.log(action.type);
  switch (action.type) {
    
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isUserLoggedIn: true,
      };

    default:
      return state;
  }
};

export default AuthReducer;
