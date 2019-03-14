// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'subs',
  order: 'descend', // or ascend
  startRange: 0,
  endRange: 0
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_SUBS':
      return {
        ...state,
        sortBy: 'subs'
      };
    case 'SORT_BY_VIDEOCOUNT':
      return {
        ...state,
        sortBy: 'videoCount'
      };
    case 'SORT_BY_CREATEDAT':
      return {
        ...state,
        sortBy: 'createdAt'
      };
    case 'SORT_BY_FOLLOWCOUNT':
      return {
        ...state,
        sortBy: 'followCount'
      };
    case 'SORT_BY_FOLLOWERCOUNT':
      return {
        ...state,
        sortBy: 'followerCount'
      };
    case 'SORT_BY_TWEETCOUNT':
      return {
        ...state,
        sortBy: 'tweetCount'
      };
    case 'SET_ORDER':
      return {
          ...state,
          order: action.order
      };
    case 'SET_START_RANGE':
      return {
        ...state,
        startRange: action.startRange
      };
    case 'SET_END_RANGE':
      return {
        ...state,
        endRange: action.endRange
      };
    case 'START_SET_RANGE':
      return {
          ...state,
          startRange: action.startRange,
          endRange: action.endRange
      };
    default:
      return state;
  }
};
