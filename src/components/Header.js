import React from 'react';

/**
 * アプリのHeader
 */

export default (props) => (
    <div className="header">
        <div className="header__container">
            <div 
                className="header__toggle" 
                onClick={props.toggleSidebar}
            >
                <span className={`header__toggle--icon ${props.navDisp && 'checked'}`}>&nbsp;</span>
            </div>
            <div className="header__logo">VTbase</div>
        </div>
    </div>
)    
    

