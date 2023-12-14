import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Loading from "./loading";
import React from "react";
import metaImage from "./(client)/images/so-do-tu-duy.jpg";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: process.env.APP_NAME,
  description: process.env.APP_DESCRIPTION,
  openGraph: {
    images: [process.env.HOST_URL + metaImage.src],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <React.Suspense fallback={<Loading />}>{children}</React.Suspense>
        </body>
      </UserProvider>
    </html>
  );
}
