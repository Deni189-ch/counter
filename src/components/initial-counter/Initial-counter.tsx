import React from "react";

interface IInitialCounter {
  isError: boolean;
  startValue: number;
  maxValue: number;
  Color: string;
  maxValueHandler: (event: any) => void;
  startValueHandler: (event: any) => void;
  setLocStorageHandler: () => void;
}

export const InitialCounter: React.FC<IInitialCounter> = ({
  isError,
  maxValue,
  startValue,
  maxValueHandler,
  startValueHandler,
  setLocStorageHandler,
  Color
}) => {
  return (
    <div className="counter">
      <div className="counter__row">
        <div className="counter__initial" style={{color: Color}}>
          max value:{" "}
          <input
            value={maxValue}
            type="number"
            className="counter__input"
            onChange={maxValueHandler}
          />
        </div>
        <div className="counter__initial">
          start value:{" "}
          <input
            value={startValue}
            type="number"
            className="counter__input"
            onChange={startValueHandler}
          />
        </div>
      </div>

      <div className="counter__row counter__row_footer">
        <button
          className="counter__button"
          onClick={setLocStorageHandler}
          disabled={isError}
        >
          set
        </button>
      </div>
    </div>
  );
};
