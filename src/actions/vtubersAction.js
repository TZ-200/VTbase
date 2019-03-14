import { storage } from '../firebase/firebase';
import axios from 'axios'

// SET_VTUBERS
export const setVtubers = (vtubers) => ({
    type: 'SET_VTUBERS',
    vtubers
});

// // SET_VTUBERS Firebase
// // deploy時は UNCOMMENT してください
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

// 開発時だけ！！！！
// Deploy時は消す！！！
export const startSetVtubers = () => {
    return (dispatch) => {
      return new Promise(function(resolve, reject) {
        const vtubers = require('../temp/vtubersBasicMinified.json');
        resolve(dispatch(setVtubers(vtubers)));
      })
    }
}