import database from '../firebase/firebase';

export const addFav = (data) => ({
    type: 'ADD_FAV',
    data
});

export const startAddFav = (data = {}) => {
    return (dispatch, getState) => {  
        const uid = getState().auth.uid;
        const {title, channelId} = data;
        return database.ref(`users/${uid}/favs`).push({title, channelId})
        .then((ref) => {
            dispatch(addFav({
                id: ref.key,
                title,
                channelId
            }));
        });
    };
};


export const removeFav = ({ id } = {}) => ({
    type: 'REMOVE_FAV',
    id
});

export const  startRemoveFav = ({ id }) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/favs/${id}`).remove()
        .then(() => dispatch(removeFav({id})));
    }
  }



export const setFavs = (favs) => ({
    type: 'SET_FAVS',
    favs
});

export const startSetFavs = () => {
    return (dispatch, getState) => {
      const favs = [];
      const uid = getState().auth.uid;
  
      return database.ref(`users/${uid}/favs`).once('value') // これをreturnしないとPromiseチェーンができない
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          favs.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        })
      })
      .then(() => {
        dispatch(setFavs(favs));
      })
    }
}
  