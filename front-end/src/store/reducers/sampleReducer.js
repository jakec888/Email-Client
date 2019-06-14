import sampleData from "../sampleData";

const initState = {
  sampleData
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SAMPLE_ACTION":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
