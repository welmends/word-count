import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Share Notes",
  description: "A simple way to share notes online",
};

const RootLayout = ({ children }) => {
  return (
    <html data-theme="cupcake" lang="en" className={inter.className}>
      <body className="flex flex-col h-screen">
        <main className="flex-grow flex flex-col justify-center">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center mt-4">
          <p className="text-sm">
            Created by{" "}
            <a
              className="text-blue-400 hover:text-blue-500"
              href="https://github.com/welmends"
              target="_blank"
            >
              @welmends
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
