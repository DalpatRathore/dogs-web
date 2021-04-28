export const searchReducer = (state, action) => {
  // console.log("state :>> ", state);
  // console.log("action :>> ", action);
  switch (action.type) {
    case "SEARCH_TERM":
      return {
        ...state,
        term: action.payload,
      };

    default:
      return state;
  }
};
