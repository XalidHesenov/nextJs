import CardItems from "./components/items/card-items";
import LeftSidebar from "./components/sidebars/left-sidebar";
import RightSidebar from "./components/sidebars/right-sidebar";
import "./globals.css";
import Header from "./header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-red-900">
        <Header />
        <CardItems />
        <div className="bg-gray-100 flex">
          <LeftSidebar />
          {children}
          <RightSidebar />
        </div>
      </body>
    </html>
  );
}
