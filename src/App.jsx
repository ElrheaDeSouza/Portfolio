import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from './components/About';
import Experience from './components/Experience';
import Footer from "./components/Footer"
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const Layout = () => {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="relative flex-grow pt-16">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<><Hero /><About /><Projects /><Skills /><Experience /></>} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
