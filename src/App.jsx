import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className={`flex-grow ${isHomePage ? 'overflow-hidden' : 'overflow-y-auto'}`}>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
