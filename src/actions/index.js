import problemDataAPI from "../apis/fe-problems";
import similarProblemDataAPI from "../apis/fe-similars";

const initialState = {
  problemData: [],
  similarData: [],
  activeData: {},
  deletedData: {},
  addedData: {},
  changedData: {},
  problemIndex: 0,
  similarIndex: 0,
};

export const fetchProblemData = () => async (dispatch) => {
  const response = await problemDataAPI.get();
  const data = response.data.data;
  initialState.problemData = data;

  dispatch({
    type: "FETCH_PROBLEM_DATA",
    payload: data,
  });
};

export const handleSimilarData = (activeData, index) => async (dispatch) => {
  const { similarData } = initialState;
  initialState.activeData = activeData;
  initialState.problemIndex = index;

  if (similarData.length === 0) {
    const response = await similarProblemDataAPI.get();
    const data = response.data.data;
    initialState.similarData = data;

    dispatch({
      type: "HANDLE_SIMILAR_DATA",
      payload: data,
      activeData: activeData,
    });
  } else {
    dispatch({
      type: "HANDLE_SIMILAR_DATA",
      payload: similarData,
      activeData: activeData,
    });
  }
};

export const handleDeleteData = (deletedData) => (dispatch) => {
  if (Object.keys(initialState.activeData).length !== 0) {
    initialState.activeData = {};

    dispatch({
      type: "HANDLE_DELETE_DATA",
      payload: initialState.problemData,
      activeData: initialState.activeData,
    });
  } else {
    initialState.activeData = {};
    initialState.deletedData = deletedData;

    let result = [];
    result = initialState.problemData.filter((el) => el.id !== deletedData.id);
    initialState.problemData = result;

    dispatch({
      type: "HANDLE_DELETE_DATA",
      payload: result,
      activeData: initialState.activeData,
    });
  }
};

export const handleAddData = (addedData) => (dispatch) => {
  const addedIndex = initialState.problemIndex + 1;

  let problemResult = [];
  problemResult = [...initialState.problemData];
  problemResult.splice(addedIndex, 0, addedData);

  initialState.problemData = problemResult;

  let similarResult = [];
  similarResult = initialState.similarData.filter(
    (el) => el.id !== addedData.id
  );
  initialState.similarData = similarResult;

  dispatch({
    type: "HANDLE_ADD_DATA",
    problemResult: problemResult,
    similarResult: similarResult,
  });
};

export const handleChangeData = (changedData, index) => (dispatch) => {
  initialState.similarIndex = index;

  const problemIdx = initialState.problemIndex;
  const similarIdx = index;

  let problemResult = [];
  problemResult = [...initialState.problemData];
  problemResult.splice(problemIdx, 1, changedData);
  initialState.problemData = problemResult;

  let similarResult = [];
  similarResult = [...initialState.similarData];
  similarResult.splice(similarIdx, 1, initialState.activeData);
  initialState.similarData = similarResult;

  initialState.activeData = changedData;

  dispatch({
    type: "HANDLE_CHANGE_DATA",
    problemResult: problemResult,
    similarResult: similarResult,
    activeData: changedData,
  });
};
