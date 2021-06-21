export const searchReducer = (state, action) => {
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
