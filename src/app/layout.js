import '../index.css';

export const metadata = {
  title: 'Felices Feby',
  description: 'Full Stack Web Developer, QA & Project Manager Portfolio',
  icons: {
    icon: '/assets/logo.svg',
    apple: '/assets/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
