import React from "react";
import "./Problem.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  handleSimilarData,
  handleDeleteData,
  handleAddData,
  handleChangeData,
} from "../actions/index";

const Problems = ({ data, index, type }) => {
  const activeData = useSelector((state) => state.dataReducer.activeData);
  const dispatch = useDispatch();

  const handleLeftBtnClick = () => {
    if (type === "problem") {
      dispatch(handleSimilarData(data, index));
    } else if (type === "similar") {
      dispatch(handleAddData(data));
    }
  };

  const handleRightBtnClick = () => {
    if (type === "problem") {
      dispatch(handleDeleteData(data));
    } else if (type === "similar") {
      dispatch(handleChangeData(data, index));
    }
  };

  return (
    <div className="problem_wrap">
      <div className="problem_header">
        <div className="problem_type_section">
          <h3 className="problem_type">{data.problemType}</h3>
          <p className="detailed_type">{data.unitName}</p>
        </div>
        <div className="problem_btn_section">
          <button
            className={activeData === data ? "active_btn" : "btn"}
            onClick={() => handleLeftBtnClick()}
          >
            {type === "problem" ? "유사문항" : "추가"}
          </button>
          <button className="btn" onClick={() => handleRightBtnClick()}>
            {type === "problem" ? "삭제" : "교체"}
          </button>
        </div>
      </div>
      <div className="problem_content">
        <div className="content_number_section">
          <h3 className="content_number">{index + 1}</h3>
        </div>
        <div className="content_img_section">
          <img src={data.problemURL} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Problems;
