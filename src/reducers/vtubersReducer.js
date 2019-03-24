const vtubersReducerDefaultState = [];

export default (state = vtubersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_VTUBERS':
        return [
          ...state,
          action.vtubers
        ];
      default:
        return state;
    }
};