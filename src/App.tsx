/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import { cn } from './lib/utils';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Steps from './pages/Steps';
import Reviews from './pages/Reviews';
import Contacts from './pages/Contacts';
import Application from './pages/Application';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Проекты', path: '/projects' },
    { name: 'Этапы', path: '/steps' },
    { name: 'Отзывы', path: '/reviews' },
    { name: 'Заявка', path: '/apply' },
    { name: 'Контакты', path: '/contacts' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#1c1c1c]/90 backdrop-blur-md border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500 rounded-sm flex items-center justify-center font-bold text-black text-xl">С</div>
              <div className="flex flex-col">
                <span className="text-white font-bold leading-none tracking-tight">СЕВЕРСТРОЙ</span>
                <span className="text-orange-500 text-[10px] uppercase tracking-widest font-medium">Инжиниринг</span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "text-sm font-medium transition-colors hover:text-orange-500",
                    isActive ? "text-orange-500" : "text-gray-300"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/apply"
              className="bg-orange-500 text-black px-6 py-2 rounded-sm font-bold text-sm hover:bg-orange-600 transition-colors"
            >
              Оставить заявку
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#1c1c1c] border-b border-orange-500/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-3 py-4 text-base font-medium border-l-2 transition-all",
                      isActive
                        ? "bg-orange-500/10 border-orange-500 text-orange-500"
                        : "border-transparent text-gray-300 hover:bg-orange-500/5 hover:text-white"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#141414] border-t border-orange-500/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <NavLink to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-sm flex items-center justify-center font-bold text-black text-xl">С</div>
              <div className="flex flex-col">
                <span className="text-white font-bold leading-none tracking-tight">СЕВЕРСТРОЙ</span>
                <span className="text-orange-500 text-[10px] uppercase tracking-widest font-medium">Инжиниринг</span>
              </div>
            </NavLink>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-8">
              Мы создаем надежные и технологичные решения в сфере промышленного и гражданского строительства. Качество, сроки и инновации — наши приоритеты.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center rounded-sm text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center rounded-sm text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Разделы</h4>
            <ul className="space-y-4">
              <li><NavLink to="/services" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Услуги</NavLink></li>
              <li><NavLink to="/projects" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Проекты</NavLink></li>
              <li><NavLink to="/steps" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Этапы работ</NavLink></li>
              <li><NavLink to="/reviews" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Отзывы</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} className="text-orange-500" />
                +7 (812) 000-00-00
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} className="text-orange-500" />
                info@severstroy.ru
              </li>
              <li className="text-gray-400 text-sm italic">
                Санкт-Петербург, ул. Строителей, д. 2026
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-gray-500 text-xs">© 2026 ООО «СеверСтрой Инжиниринг». Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300">Политика конфиденциальности</a>
            <a href="#" className="text-gray-500 text-xs hover:text-gray-300">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1c1c1c] text-white flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/steps" element={<Steps />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/apply" element={<Application />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

