"use client";
import { Auth0Provider } from "@auth0/auth0-react";
import Footer from "./Footer";
import Header from "./Header";

const Providers = ({ children }) => {
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  return (
    <Auth0Provider
      domain="f8teacher.us.auth0.com"
      clientId="m2fGDR4RJBsvYWE1hE1THcgFEXWISLr0"
      authorizationParams={{
        redirect_uri: origin,
      }}
    >
      <Header />
      {children}
      <Footer />
    </Auth0Provider>
  );
};

export default Providers;
