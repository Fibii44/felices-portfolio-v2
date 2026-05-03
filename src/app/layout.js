import '../index.css';

export const metadata = {
  title: 'Felices Portfolio',
  description: 'Web Developer & QA Tester Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
