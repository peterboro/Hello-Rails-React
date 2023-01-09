export const fetchMessage = () => {
  return dispatch => {
    return fetch('/api/messages')
      .then(response => response.json())
      .then(json => dispatch(receiveMessage(json)));
  }
};

export const receiveMessage = (json) => {
  return {
    type: 'RECEIVE_MESSAGE',
    message: json
  }
};
