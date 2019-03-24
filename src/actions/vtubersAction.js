

export const setVtubers = (vtubers) => ({
  type: 'SET_VTUBERS',
  vtubers
});

// LoadingにFirebaseを使用する際は以下を UNCOMMENT
// import { storage } from '../firebase/firebase';
// import axios from 'axios'
// export const startSetVtubers = () => {
//     return (dispatch) => {
//       const fileRef = storage.ref('vtubers/vtubersBasicMinified.json')
//       return fileRef.getDownloadURL()
//             .then(url => {
//                 return axios.get(`https://cors-anywhere.herokuapp.com/${url}`)
//             })
//             .then(response => {
//                 dispatch(setVtubers(response.data))
//             })
//     }
// }

// Firebaseを使用しない場合は以下を使用
export const startSetVtubers = () => {
  return (dispatch) => {
    return new Promise(function(resolve, reject) {
      const vtubers = require('../temp/vtubersBasicMinified.json');
      resolve(dispatch(setVtubers(vtubers)));
    })
  }
}