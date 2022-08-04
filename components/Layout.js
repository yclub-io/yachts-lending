import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="relative m-auto max-w-[1440px]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
