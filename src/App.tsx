import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsErrorAC,
  setIsSuccessAC,
  setIsInitialStartAC,
  setIsDisabledIncAC,
} from "./redux/actions";
import { Counter, InitialCounter } from "./components";

import "./app.scss";

function App() {
  const [startValue, setStartValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);

  const isSuccess = useSelector((state: any) => state.state.isSuccess);
  const isError = useSelector((state: any) => state.state.isError);
  const isDisabledInc = useSelector((state: any) => state.state.isDisabledInc);

  const initialisStart = useSelector(
    (state: any) => state.state.initialisStart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const start = localStorage.getItem("startValue");  // тут обернуть сразу не смог TS ругаеться
    if (start) {
      const startParse = JSON.parse(start);
      dispatch(setIsInitialStartAC(startParse));
    }
  }, []);

  const maxValueHandler = ({ currentTarget: { value } }: any) => {
    //ChangeEventHandler<HTMLInputElement>
    setMaxValue(value);

    value === startValue || value < startValue || value < 0
      ? dispatch(setIsErrorAC(true))
      : dispatch(setIsSuccessAC(true));
  };

  const startValueHandler = ({ currentTarget: { value } }: any) => {
    setStartValue(value);

    value === maxValue || value > maxValue || value < 0
      ? dispatch(setIsErrorAC(true))
      : dispatch(setIsSuccessAC(true));
  };

  const setLocStorageHandler = () => {
    localStorage.setItem("startValue", JSON.stringify(startValue));
    dispatch(setIsInitialStartAC(startValue));
  };

  const incHandler = () => {
    const newInitilStart = Number(initialisStart) + 1;

    maxValue >= newInitilStart
      ? dispatch(setIsInitialStartAC(newInitilStart))
      : dispatch(setIsDisabledIncAC(true));
  };

  const resetHandler = () => {
    dispatch(setIsInitialStartAC(0));
  };

  const Color = isDisabledInc ? "red" : "";

  return (
    <div className="App">
      <InitialCounter
        isError={isError}
        startValue={startValue}
        maxValue={maxValue}
        maxValueHandler={maxValueHandler}
        startValueHandler={startValueHandler}
        setLocStorageHandler={setLocStorageHandler}
        Color={Color}
      />
      <Counter
        isError={isError}
        isSuccess={isSuccess}
        isDisabledInc={isDisabledInc}
        initialisStart={initialisStart}
        incHandler={incHandler}
        resetHandler={resetHandler}
        Color={Color}
      />
    </div>
  );
}

export default App;
