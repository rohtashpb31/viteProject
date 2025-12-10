
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import './home.css'
import ParticlesPage from './components/ParticlesBackground'


export const metadata = {
  title: "VIPL – Innovating Infrastructure",
  description: "7D Precision Infrastructure Solutions",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className="relative">
      
        <>
          <ParticlesPage/>
        {children}
        </>
      </body>
    </html>
  );
}
