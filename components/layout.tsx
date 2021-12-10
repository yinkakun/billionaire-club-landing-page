import Header from '@/components/header';
import Footer from '@/components/footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): React.ReactElement => (
  <div className="flex flex-col min-h-full text-white bg-dark">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

export default Layout;
