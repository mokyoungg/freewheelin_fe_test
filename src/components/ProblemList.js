import React, { useEffect } from "react";
import "./ProblemList.scss";
import Problem from "./Problem";

import { useSelector, useDispatch } from "react-redux";
import { fetchProblemData } from "../actions/index";

const ProblemList = () => {
  const dispatch = useDispatch();
  const problemData = useSelector((state) => state.dataReducer.problemData);

  useEffect(() => {
    dispatch(fetchProblemData());
  }, []);

  const renderList = () => {
    if (problemData.length === 0) {
      return (
        <div className="data_fetch_guide">
          <button
            onClick={() => dispatch(fetchProblemData())}
            className="data_fetch_btn"
          >
            문제 데이터 불러오기
          </button>
          ;
        </div>
      );
    } else {
      return problemData.map((data, index) => {
        return (
          <Problem data={data} key={data.id} index={index} type="problem" />
        );
      });
    }
  };
  return (
    <div className="list_wrap">
      <div className="list_header_section">
        <div className="list_header">학습지 상세 편집</div>
      </div>
      <div className="list_container">{renderList()}</div>
    </div>
  );
};

export default ProblemList;
