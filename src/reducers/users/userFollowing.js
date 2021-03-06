const defaultFollowing = [];
// userFollowing
const initialState = {
  following: defaultFollowing,
  isFetching: false,
  hasError: false
};

function userFollowingReducer(state=initialState, action){
  switch (action.type) {
    case 'GET_USER_FOLLOWING_INFO':
      return {
        ...state,
        hasError: false,
        following: [],
        isFetching: true
      };
    case 'USER_FOLLOWING_RESULTS':
      return {
        ...state,
        following: action.data,
        isFetching: false,
      };
    case 'USER_FOLLOWING_ERROR':
      return {
        ...state,
        following: [],
        isFetching: false,
        hasError: true
      };
    default:
      return state
  }
}

export default userFollowingReducer;