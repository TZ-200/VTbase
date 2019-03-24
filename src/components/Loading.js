import React from 'react';

/**
 * アプリのLoading画面
 */

export default () => (
    <div className='loading'>
        <img className='loading__gif' src='../temp/Pacman.gif' />
        <div className='loading__text'>Now loading...</div>
    </div>
);