import database from '../firebase/firebase';

export const addFav = (channelId) => ({
    type: 'ADD_FAV',
    channelId
});

export const startAddFav = (channelId = {}) => {
    return (dispatch, getState) => {  
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/favs`).push({channelId})
        .then((ref) => {
            dispatch(addFav({
                id: ref.key,
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
  