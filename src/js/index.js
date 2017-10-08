import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';

ReactDOM.render(
    <Root apiUrl={window.apiUrl} />,
    document.getElementById('root'),
);
