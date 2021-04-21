import { IS_ERROR, IS_SUCCESS, IS_INITIAL_START, IS_DISABLED_INC } from "../data/types";

//тут че писать велью, шмелью или по симантике
export const setIsErrorAC = (payload: boolean) => ({
  type: IS_ERROR,
  payload,
});

export const setIsSuccessAC = (payload: boolean) => ({
  type: IS_SUCCESS,
  payload,
});

export const setIsInitialStartAC = (payload: number) => ({
  type: IS_INITIAL_START,
  payload,
});

export const setIsDisabledIncAC = (payload: boolean) => ({
  type: IS_DISABLED_INC,
  payload,
});

