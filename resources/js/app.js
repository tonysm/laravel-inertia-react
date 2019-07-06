import React from 'react';
import { render } from 'react-dom';
import Inertia from 'inertia-react';

import './bootstrap';

const app = document.getElementById('app');

render(
    <Inertia
        initialPage={JSON.parse(app.dataset.page)}
        resolveComponent={name => import(`@/pages/${name}`).then(module => module.default)}
    />,
    app
);
