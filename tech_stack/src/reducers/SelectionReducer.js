// Provide initial state since first time it will be null
export default (state = null, action) => {
  switch (action.type) {
    case "select_library":
      return action.payload;
    default:
      // Return whatever state was obtained last time
      return state;
  }
};
