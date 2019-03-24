import React from 'react';

/**
 * vtuberの登録フォーム
 */

const FormPage = () => (
  <form 
    action="" 
    className="form"
    style={{
      backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 100%), url(../temp/form.jpg)'
    }}  
  >
      <h2 className="form__group form__title">DB REQUEST</h2>
      <div className="form__group">
          <input type="text" className="form__input" placeholder="Channel Title" id="channelTitle" required />
          <label htmlFor="name" className="form__label">Channel Title</label>
      </div>
      <div className="form__group">
          <input type="text" className="form__input" placeholder="Youtube Channel ID" id="channelId" required />
          <label htmlFor="text" className="form__label">Youtube Channel ID</label>
      </div>
      <div className="form__group">
          <input type="text" className="form__input" placeholder="Twitter ID" id="twitterId" required />
          <label htmlFor="text" className="form__label">Twitter ID</label>
      </div>
      <div className="form__group">
          <div className="btn">Next step &rarr;</div>
      </div>
  </form>
);

export default FormPage;