const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      return action.message;
    default:
      return state;
  }
};

export default messageReducer;
