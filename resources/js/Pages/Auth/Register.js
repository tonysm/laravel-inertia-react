import React, { useState } from 'react';
import Inertia from 'inertia';
import { usePageProps } from 'inertia-react';

import Layout from '@/Components/Layout';
import TextField from '@/Components/Forms/TextField';

export default () => {
    const page = usePageProps();
    const [form, setValue] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
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

        Inertia.post('/register', form)
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
                            <div className="card-header">Register</div>

                            <div className="card-body">
                                <form method="POST" onSubmit={handleSubmit}>
                                    <TextField
                                        label="Name"
                                        type="text"
                                        id="name"
                                        autoComplete="name"
                                        autoFocus
                                        value={form.name}
                                        error={page.errors.name}
                                        onChange={(e) => {
                                            updateField('name', e.target.value);
                                        }}
                                    />

                                    <TextField
                                        label="E-Mail Address"
                                        type="email"
                                        id="email"
                                        autoComplete="email"
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

                                    <TextField
                                        label="Password Confirmation"
                                        type="password"
                                        id="password_confirmation"
                                        autoComplete="password"
                                        value={form.password_confirmation}
                                        error={page.errors.password_confirmation}
                                        onChange={(e) => {
                                            updateField('password_confirmation', e.target.value);
                                        }}
                                    />

                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary" disabled={form.loading}>
                                                { !form.loading ? 'Register' : 'Registering...' }
                                            </button>
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
