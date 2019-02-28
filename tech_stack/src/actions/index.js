// Action creater
export const selectLibrary = libraryId => {
  return {
    // Updates reducers data
    type: "select_library",
    payload: libraryId
  };
};
