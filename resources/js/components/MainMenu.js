import React from 'react';
import { InertiaLink } from 'inertia-react';

export default () => (
    <div
        className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
    >
        <h5 className="my-0 mr-md-auto font-weight-normal">Inertia.JS</h5>
        <nav className="my-2 my-md-0 mr-md-3">
            <InertiaLink className="p-2 text-dark" href="/">Home</InertiaLink>
            <InertiaLink className="p-2 text-dark" href="/about">About</InertiaLink>
        </nav>
        <a className="btn btn-outline-primary" href="#">Sign up</a>
    </div>
);
