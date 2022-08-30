


export const signup = (data) => ({
    type: 'SIGNUP_SUCCESS',
    payload: data,
  }
  );

  export const loginmodalopen = () => ({
    type: 'LOGIN_MODAL_OPEN',
  });
  export const loginmodalclose = () => ({
    type: 'LOGIN_MODAL_CLOSE',
  });
  export const signupmodalopen = () => ({
    type: 'SIGNUP_MODAL_OPEN',
  });
  export const signupmodalclose = () => ({
    type: 'SIGNUP_MODAL_CLOSE',
  });

  export const editprofilemodalopen = () => ({
    type: 'EDIT_MODAL_OPEN',
  });

  export const editprofilemodalclose = () => ({
    type: 'EDIT_MODAL_CLOSE',
  });

  export const updatedetails = (data) => ({
    type: 'UPDATE_SUCCESS',
    payload: data,
  }
  );