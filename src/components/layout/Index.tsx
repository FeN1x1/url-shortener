import Footer from "./Footer";
import Header from "./Header";

const Index = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Index;
