import React from 'react';

import MainMenu from './MainMenu';

export default ({children}) => (
    <div>
        <MainMenu />
        {children}
    </div>
);
