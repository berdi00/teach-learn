import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case "RADIO":
      return {
        ...state,
        radio: {
          value: action.value,
        },
      };
    case "SET_DATA":
      return {
        inputs: action.inputs,
        radio: action.radio,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs, initialRadio, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    radio: initialRadio,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const radioHandler = useCallback((radioValue) => {
    dispatch({
      type: "RADIO",
      value: radioValue,
    });
  }, []);

  const setFormData = useCallback((inputData, radioValue, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      radio: radioValue,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, radioHandler, setFormData];
};
