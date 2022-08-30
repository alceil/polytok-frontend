
const initialState = {
  isUserLoggedIn: false,
  isEditModalVisible: false,
  isLoginModalVisible: false,
  isSignUpModalVisible: false,
  user: {
    firstname: null,
  },
};

const AuthReducer = (state = initialState, action) => {
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
            case 'SIGNUP_MODAL_CLOSE':
              return {
                ...state,
                isSignUpModalVisible: false,
              };
              case 'EDIT_MODAL_OPEN':
                return {
                  ...state,
                  isEditModalVisible: true,
                };
                case 'EDIT_MODAL_CLOSE':
                  return {
                    ...state,
                    isEditModalVisible: false,
                  };

    default:
      return state;
  }
};

export default AuthReducer;
