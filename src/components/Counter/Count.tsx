import React from "react";
import "../style.scss";

interface ICounter {
  isError: boolean;
  isSuccess: boolean;
  initialisStart: null | number;
  incHandler: () => void;
  resetHandler: () => void;
  isDisabledInc: boolean;
  Color: string;
}

export const Counter: React.FC<ICounter> = ({
  isError,
  isSuccess,
  initialisStart,
  incHandler,
  resetHandler,
  isDisabledInc,
  Color,
}) => {
  return (
    <div className="counter">
      <div className="counter__row">
        {!!initialisStart && (
          <div className="counter__notification" style={{ color: Color }}>
            {initialisStart}
          </div>
        )}
        {isError && (
          <div className="counter__notification" style={{ color: "red" }}>
            Incorrect value!
          </div>
        )}
        {isSuccess && (
          <div className="counter__notification">
            enter values and press 'set'
          </div>
        )}
      </div>

      <div className="counter__row counter__row_footer">
        <button
          className="counter__button"
          onClick={incHandler}
          style={{ color: Color }}
          disabled={isDisabledInc}
        >
          inc
        </button>
        <button
          className="counter__button counter__button_right"
          onClick={resetHandler}
        >
          reset
        </button>
      </div>
    </div>
  );
};
