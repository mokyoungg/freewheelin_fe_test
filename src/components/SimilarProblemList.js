import React from "react";
import "./SimilarProblemList.scss";
import Problem from "./Problem";

import { useSelector } from "react-redux";

const SimilarProblemList = () => {
  const similarData = useSelector((state) => state.dataReducer.similarData);
  const activeData = useSelector((state) => state.dataReducer.activeData);

  const renderSimilarList = () => {
    if (Object.keys(activeData).length === 0) {
      return (
        <div className="guide_message_section">
          <div className="guide_message">
            <button>유사문항</button> 버튼을 누르면
            <br />
            해당문제의 유사 문항을 볼 수 있습니다.
          </div>
        </div>
      );
    } else {
      return similarData.map((data, index) => {
        return (
          <Problem data={data} key={data.id} index={index} type="similar" />
        );
      });
    }
  };

  return (
    <div className="similar_list_wrap">
      <div className="similar_list_header_section">
        <div className="similar_list_header">문항 교체 추가</div>
      </div>
      <div className="similar_list_container">
        {Object.keys(activeData).length > 0 && (
          <div className="active_data_type_container">
            <p className="guide_active_data_type">{activeData.unitName}</p>
          </div>
        )}

        {renderSimilarList()}
      </div>
    </div>
  );
};

export default SimilarProblemList;
