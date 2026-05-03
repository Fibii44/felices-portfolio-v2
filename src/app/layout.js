import '../index.css';

export const metadata = {
  title: 'Felices Feby',
  description: 'Web Developer & QA Tester Portfolio',
  icons: {
    icon: '/logo.svg?v=2',
    apple: '/logo.svg?v=2',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
