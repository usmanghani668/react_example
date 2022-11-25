import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../redux/slices/example";
import { DECREMENT_LABEL, INCREMENT_LABEL } from "../../../utils/Constants";
import { RootState } from "../../../redux/store";

const User = () => {
  const count = useSelector((state: RootState) => state.example?.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="content d-flex justify-content-center align-items-center">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          {INCREMENT_LABEL}
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          {DECREMENT_LABEL}
        </button>
      </div>
    </div>
  );
};

export default User;
