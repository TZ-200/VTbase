import React from 'react';

// スクロールに対応するだけのコンポーネント

const Scroll = (props) => {
  return (
    <div className="scroll" >
      {props.children}
    </div>
  );
};

export default Scroll;