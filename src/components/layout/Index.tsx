import Footer from "./Footer";
import Header from "./Header";

const Index = ({ children }: { children: JSX.Element }) => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="mockup-window h-screen border border-purple-500">
        <div className="flex flex-col items-center justify-center">
          <Header />
          <div className="container  flex flex-col items-center justify-center gap-4 px-4 py-16 ">
            <h1 className="text-5x mb-12 font-extrabold tracking-tight text-white sm:text-[5rem]">
              URL <span className="text-[hsl(280,100%,70%)]">Short</span>ener
            </h1>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Index;
