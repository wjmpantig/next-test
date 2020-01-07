import Header from './Header';
import Footer from './Footer';

const withLayout = (Content) => (
    <div>
        <Header />
        <main>
            <Content />
        </main>
        <Footer />
    </div>
);
export default withLayout;