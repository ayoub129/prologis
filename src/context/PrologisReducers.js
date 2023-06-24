const PrologisReducers = (state, action) => {
  switch (action.type) {
    case "SEARCH_PROPERTIES":
      return {
        properties: action.payload,
      };
    case "FILTER_PROPERTIES":
      return {
        properties: action.payload,
      };
    default:
      return state;
  }
};

export default PrologisReducers;
