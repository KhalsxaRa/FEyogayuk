/* eslint-disable */
import { lazy, Suspense, useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './store/authSlice';
import { Menu, X, User, LogOut, Heart, Loader2 } from 'lucide-react';

// Lazy loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Classes = lazy(() => import('./pages/Classes'));
const About = lazy(() => import('./pages/about'));
const Login = lazy(() => import('./pages/Auth/login'));
const Signup = lazy(() => import('./pages/Auth/signup'));
const Profile = lazy(() => import('./pages/Profile'));

const LoadingScreen = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
    <Loader2 className="animate-spin text-primary" size={48} />
    <p className="text-primary font-medium animate-pulse">Loading Peace...</p>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Classes', path: '/classes' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed w-full z-50 glass border-b border-primary-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
                <Heart size={20} />
              </div>
              <span className="text-2xl font-serif font-bold text-primary-dark">YogaYuk</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-primary-dark/70'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {user ? (
              <div className="flex items-center gap-4">
                <Link to={`/profile/${user.id_pengguna}`} className="flex items-center gap-2 text-sm font-medium text-primary-dark hover:text-primary transition-colors">
                  <User size={18} />
                  <span>{user.nama}</span>
                </Link>
                <button onClick={handleLogout} className="p-2 text-primary-dark hover:text-red-500 transition-colors">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-sm font-medium text-primary-dark hover:text-primary transition-colors">Login</Link>
                <Link to="/signup" className="btn-primary py-2 px-6">Sign Up</Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-primary-dark">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-primary-light/20 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-primary-dark hover:bg-primary-light/10 rounded-xl"
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  to={`/profile/${user.id_pengguna}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-primary-dark"
                >
                  Profile
                </Link>
                <button
                  onClick={() => { handleLogout(); setIsOpen(false); }}
                  className="w-full text-left px-3 py-4 text-base font-medium text-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-4 p-3">
                <Link to="/login" onClick={() => setIsOpen(false)} className="btn-outline text-center py-2">Login</Link>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="btn-primary text-center py-2">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-primary-dark text-primary-light/80 py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Heart size={24} className="text-primary-light" />
        <span className="text-2xl font-serif font-bold text-white">YogaYuk</span>
      </div>
      <p className="max-w-md mx-auto text-sm mb-8">
        Your journey to wellness and mindfulness begins here. Embrace the peace within you.
      </p>
      <div className="flex justify-center space-x-6 mb-8">
        <a href="#" className="hover:text-white transition-colors">Instagram</a>
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">YouTube</a>
      </div>
      <div className="pt-8 border-t border-white/10 text-xs">
        &copy; 2026 YogaYuk. All rights reserved.
      </div>
    </div>
  </footer>
);

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow pt-20">
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Suspense fallback={<Layout><LoadingScreen /></Layout>}>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/classes" element={<Layout><Classes /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/signup" element={<Layout><Signup /></Layout>} />
        <Route path="/profile/:id" element={<Layout><Profile /></Layout>} />
      </Routes>
    </Suspense>
  );
}

export default App;
