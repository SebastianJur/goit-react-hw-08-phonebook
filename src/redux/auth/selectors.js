export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;

export const selectError = state => state.auth.error;
