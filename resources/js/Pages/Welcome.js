import React from 'react';
import { InertiaLink, usePageProps } from "inertia-react";
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #fff;
    color: #636b6f;
    font-family: 'Nunito', sans-serif;
    font-weight: 200;
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LinksWrapper = styled.div`
    & > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }
`;

const TopNav = styled.div`
    position: absolute;
    right: 10px;
    top: 18px;
`;

const Content = styled.div`
    text-align: center;
    
    .title {
        font-size: 84px;
    }
    
    .m-b-md {
        margin-bottom: 30px;
    }
`;

export default () => {
    const page = usePageProps();

    return (
        <Wrapper>
            <TopNav>
                <LinksWrapper>
                    {page.auth.user && (<InertiaLink href="/home">Home</InertiaLink>)}
                    {!page.auth.user && (<InertiaLink href="/login">Login</InertiaLink>)}
                    {!page.auth.user && (<InertiaLink href="/register">Register</InertiaLink>)}
                </LinksWrapper>
            </TopNav>

            <Content>
                <div className="title">
                    Laravel
                </div>

                <LinksWrapper>
                    <a href="https://laravel.com/docs">Docs</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://blog.laravel.com">Blog</a>
                    <a href="https://nova.laravel.com">Nova</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </LinksWrapper>
            </Content>
        </Wrapper>
    );
};
