import React from 'react';
import Inertia from 'inertia';
import { InertiaLink, usePageProps } from 'inertia-react';

export default () => {
    const page = usePageProps();

    const submitLogout = (e) => {
        e.preventDefault();

        Inertia.post('/logout');
    };

    return (
        <div
            className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
        >
            <h5 className="my-0 mr-md-auto font-weight-normal">
                <a className="text-black-50" href="/">Inertia.JS</a>
            </h5>
            <nav className="my-2 my-md-0 mr-md-3">
                {!page.auth.user && (<InertiaLink className="p-2 text-dark" href="/login">Login</InertiaLink>)}
                {!page.auth.user && (<InertiaLink className="p-2 text-dark" href="/register">Register</InertiaLink>)}
                {page.auth.user && (
                    <a className="p-2 text-dark" href="/logout" onClick={submitLogout}>Logout</a>
                )}
            </nav>
        </div>
    );
};
