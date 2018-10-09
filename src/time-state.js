export const getInitialState = () => ({
  getError:   null,
  isLoading:  false,
  time:       null,
});

export const onGetTime = time => oldState => ({
  getError: false,
  isLoading: false,
  time,
});

export const onGetError = error => oldState => ({
  isLoading: false,
  time: null,
  getError: error,
});
