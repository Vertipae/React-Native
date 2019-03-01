// Instead of returning undefined state is null // Not currently selected library
export default (state = null, action) => {
  // console.log(action);
  switch (action.type) {
    case "select_library":
      // Returning library's ID
      return action.payload;
    // Have to return something in default if the action isn't select_library (melt motherboard)
    default:
      // Returning null
      return state;
  }
};
