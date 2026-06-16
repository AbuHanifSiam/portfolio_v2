import "./globals.css";
import CursorCanvas from "@/components/CursorCanvas/CursorCanvas";

export const metadata = {
  title: "Md. Abu Hanif Siam | Software Project Manager",
  description:
    "Portfolio of Md. Abu Hanif Siam — Software Project Manager specializing in Agile delivery, rescuing stalled projects, and shipping software that matters.",
  keywords: [
    "Software Project Manager",
    "Agile",
    "Scrum",
    "Project Management",
    "Md Abu Hanif Siam",
    "Portfolio",
  ],
  authors: [{ name: "Md. Abu Hanif Siam" }],
  openGraph: {
    title: "Md. Abu Hanif Siam | Software Project Manager",
    description:
      "I turn chaos into shipped products. Agile PM specializing in rescuing stalled projects and delivering software on time.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Abu Hanif Siam | Software Project Manager",
    description:
      "I turn chaos into shipped products. Agile PM specializing in rescuing stalled projects.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <CursorCanvas />
        {children}
      </body>
    </html>
  );
}
