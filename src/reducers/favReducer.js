const favReducerDefaultState = [];


export default (state = favReducerDefaultState, action) => {
    
    switch (action.type){
        case 'ADD_FAV':
            return [
                ...state,
                action.channelId
            ];
        case 'REMOVE_FAV':
            return state.filter(({ id }) => id !== action.id);
        case 'SET_FAVS':
            return action.favs
        default:
            return state;
    }
};