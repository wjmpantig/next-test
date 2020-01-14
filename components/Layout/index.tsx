import React, { FunctionComponent, ReactElement } from 'react';
import Header from './Header';
import Footer from './Footer';
type LayoutProps = {
    children: ReactElement
};

const Layout:FunctionComponent<LayoutProps> = ({ children }) => (
    <div>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>
);
export default Layout;
