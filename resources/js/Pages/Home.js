import React from 'react';
import { usePageProps } from "inertia-react";

import Layout from '@/Components/Layout';

export default () => {
    const page = usePageProps();

    return (
        <Layout>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Dashboard</div>

                            <div className="card-body">
                                {page.flash.success && (
                                    <div className="alert alert-success" role="alert">
                                        {page.flash.success}
                                    </div>
                                )}

                                You are logged in!
                            </div>
                        </div>
                    </div>
                </div>
            </div>>
        </Layout>
    );
};
