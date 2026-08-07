import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://customic.com.br"),
  title: "Capas e Acessórios para Celular no Atacado | Customic",
  description: "Capas premium, películas, wallets, alças e acessórios para celular no atacado. Conheça as condições comerciais para revendedores Customic.",
  alternates: { canonical: "/atacado" },
  openGraph: {
    title: "Capas e Acessórios para Celular no Atacado | Customic",
    description: "Conheça o portfólio premium e as condições comerciais para revendedores Customic.",
    url: "/atacado",
    siteName: "Customic",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/customic-banner-produtos-oficiais-20260804.jpg", width: 1600, height: 800, alt: "Produtos oficiais Customic" }],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Customic",
  url: "https://customic.com.br",
  logo: "https://customic.com.br/customic-logo.png",
  description: "Fornecedor de capas, películas, wallets e acessórios premium para celular no atacado, com condições comerciais para revendedores em todo o Brasil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
