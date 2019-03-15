import React from 'react';
import AppRouter, {history} from '../routers/AppRouter';



export class NotFoundPage extends React.Component{

  onClick = () => {
    history.push('/about');
  }

  render(){
    return (
      <div className="notFound">


      <div className="notFound--container" >
          <div 
              className="notFound__clip"
              style={{
                backgroundImage: 'url("./temp/404.jpg")'
              }}  
          >
            Oops!
          </div>
          <div className="notFound__text">
              404 - PAGE NOT FOUND
          </div>
          <button 
              className="notFound__button" 
              onClick={this.onClick}
          > 
              Back
          </button>
      </div>

  
  </div>
    )
  }
}


export default NotFoundPage;
