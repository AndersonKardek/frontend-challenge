import { Header } from "@/components/Header";
import "./globals.css";
import { Saira } from "next/font/google";
import { Container } from "@/components/Container";

const saira = Saira({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Capputeno",
  description: "Frontend-challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={saira.className}>
        <Container>
          <Header />

          {children}
        </Container>
      </body>
    </html>
  );
}
