
const initialState = {
    
  };
  
  const PostReducer = (state = initialState, action) => {
    console.log("DATA")
    switch (action.type) {
      
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          user:action.payload,
          isUserLoggedIn: true,
        };
        case 'UPDATE_SUCCESS':
          return {
            ...state,
            user:action.payload,
          };
        case 'LOGIN_MODAL_OPEN':
          return {
            ...state,
            isLoginModalVisible: true,
          };
          case 'SIGNUP_MODAL_OPEN':
            return {
              ...state,
              isSignUpModalVisible: true,
            };
            case 'LOGIN_MODAL_CLOSE':
              return {
                ...state,
                isLoginModalVisible: false,
              };

  
      default:
        return state;
    }
  };
  
  export default PostReducer;
  