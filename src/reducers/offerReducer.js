const offerReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE':
      return [...this.state];
    case 'DELETE':
      return state - 1;
    default:
      return state;
  }
};

export default offerReducer;
