'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { auth } from '@/lib/api';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isAuthenticated = auth.isAuthenticated();

  const handleLogout = () => {
    auth.logout();
    router.push('/');
  };

  return (
    <nav className="bg-emerald-700 shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-white">
                Loja Maçônica Eliphas Levi
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-emerald-100 hover:text-white px-3 py-2 text-sm font-medium">
              Início
            </Link>
            <Link href="/mason" className="text-emerald-100 hover:text-white px-3 py-2 text-sm font-medium">
              Área Maçons
            </Link>
            <Link href="/member" className="text-emerald-100 hover:text-white px-3 py-2 text-sm font-medium">
              Área Membros
            </Link>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogout}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-emerald-100 hover:text-white px-3 py-2 text-sm font-medium">
                  Entrar
                </Link>
                <Link href="/register" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Cadastrar
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-100 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-emerald-100 hover:text-white block px-3 py-2 text-base font-medium">
                Início
              </Link>
              <Link href="/mason" className="text-emerald-100 hover:text-white block px-3 py-2 text-base font-medium">
                Área Maçons
              </Link>
              <Link href="/member" className="text-emerald-100 hover:text-white block px-3 py-2 text-base font-medium">
                Área Membros
              </Link>
              
              {isAuthenticated ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="text-emerald-100 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-emerald-100 hover:text-white block px-3 py-2 text-base font-medium">
                    Entrar
                  </Link>
                  <Link href="/register" className="text-emerald-100 hover:text-white block px-3 py-2 text-base font-medium">
                    Cadastrar
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
