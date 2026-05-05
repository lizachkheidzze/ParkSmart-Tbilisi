import './globals.css';

export const metadata = {
  title: 'ParkSmart Tbilisi',
  description: 'Smart parking platform for Tbilisi',
  manifest: '/manifest.json'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}