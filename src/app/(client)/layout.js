import Header from "./partials/Header";
import Footer from "./partials/Footer";
const ClientLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default ClientLayout;
