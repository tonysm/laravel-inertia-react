import React, { useState } from 'react';
import Inertia from 'inertia';
import { InertiaLink, usePageProps } from 'inertia-react';

import Layout from '@/Components/Layout';
import TextField from '@/Components/Forms/TextField';

export default () => {
    const page = usePageProps();
    const [form, setValue] = useState({
        email: '',
        password: '',
        loading: false,
    });

    const updateField = (field, value) => {
        return setValue({
            ...form,
            [field]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        updateField('loading', true);

        Inertia.post('/login', form)
            .then(() => {
                updateField('loading', false);
            });
    };

    return (
        <Layout>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Login</div>

                            <div className="card-body">
                                <form method="POST" onSubmit={handleSubmit}>
                                    <TextField
                                        label="E-Mail Address"
                                        type="email"
                                        id="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={form.email}
                                        error={page.errors.email}
                                        onChange={(e) => {
                                            updateField('email', e.target.value);
                                        }}
                                    />

                                    <TextField
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="password"
                                        value={form.password}
                                        error={page.errors.password}
                                        onChange={(e) => {
                                            updateField('password', e.target.value);
                                        }}
                                    />

                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary" disabled={form.loading}>
                                                { !form.loading ? 'Login' : 'Checking...' }
                                            </button>

                                            <InertiaLink className="btn btn-link" href="/password/reset">
                                                Forgot your password?
                                            </InertiaLink>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
