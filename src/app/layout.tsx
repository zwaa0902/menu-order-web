import { MenuProvider } from "@/context/MenuContext";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <MenuProvider>{children}</MenuProvider>
      </body>
    </html>
  );
}
