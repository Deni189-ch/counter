import { IS_ERROR, IS_SUCCESS, IS_INITIAL_START, IS_DISABLED_INC } from "../data/types"; //так и не понял почему тупс а константс называть надо

// export interface IRootState {
//   isError: boolean;
//   isSuccess: boolean;
//   isInitialisStart: null | number,
// }

const initialState = {
  isError: false as boolean,
  isSuccess: false as boolean,
  initialisStart: 0 as null | number,
  isDisabledInc: false as boolean,
};

export const stateReducer = (state = initialState, action: any) => {  //action ? 
  switch (action.type) {
    case IS_ERROR:
      return { ...state,
        isError: action.payload,
        isSuccess: false,
        initialisStart: null
      }; //слышал типо удобно и гибкo писать пайлоад всегда, не слышал?
    
    case IS_SUCCESS:
      return { ...state,
        isSuccess: action.payload,
        isError: false,
        initialisStart: null
      };

    case IS_INITIAL_START:
      return { ...state,
        initialisStart: action.payload,
        isError: false,
        isSuccess: false,
        isDisabledInc: false
      };

    case IS_DISABLED_INC:
      return { ...state,
        isDisabledInc: action.payload
      };


    default:
      return state;
  }
};
