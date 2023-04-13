import { useCallback } from 'react';
import { useSelector,useDispatch } from "react-redux";
import {loginmodalopen } from '../redux/slices/users.slice';
/**
 *
 * Custom hook which returns a function which modifies any function
 * in such a way that only the logged in user can use it.
 * @returns A function which modifies event handler functions
 */
export const useProtectedFunction = () => {
    const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const dispatch = useDispatch();

  /**
   *
   * A Higher order function which modifies any function in such a way that
   * only the logged in user can use it.
   * @param functionToProtect The function to be protected from logged out user
   * @returns Modified function which will only triggers when called by logged in user
   */
  const protectFunction = useCallback(
    (functionToProtect) => (...args) => {
      if (isUserLoggedIn) {
        functionToProtect(...args);
      } else {
        dispatch(loginmodalopen());
      }
    },
    [isUserLoggedIn]
  );

  return protectFunction;
};

