import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Loja Maçônica Eliphas Levi',
  description: 'Loja Maçônica Eliphas Levi - São Paulo',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo/Símbolo Maçônico */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-6xl text-emerald-800">⚖️</span>
          </div>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Loja Maçônica Eliphas Levi
        </h1>
        
        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-emerald-100 mb-12">
          Liberdade, Igualdade e Fraternidade
        </p>

        {/* Card do Aviso */}
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 max-w-2xl mx-auto">
          <div className="mb-6">
            <span className="text-4xl mb-4 block">📅</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Próxima Sessão
            </h2>
          </div>
          
          <div className="space-y-4 text-gray-700">
            <p className="text-lg md:text-xl font-semibold text-emerald-800">
              20 de Setembro de 2025
            </p>
            <p className="text-lg md:text-xl">
              📍 A partir das <span className="font-semibold text-emerald-800">9:00</span> da manhã
            </p>
            <div className="border-t border-gray-200 pt-6 mt-6">
              <p className="text-sm text-gray-600">
                Para mais informações, entre em contato com a secretaria da loja.
              </p>
            </div>
          </div>
        </div>

        {/* Rodapé simples */}
        <div className="mt-12 text-emerald-200 text-sm">
          <p>© 2025 Loja Maçônica Eliphas Levi - São Paulo</p>
        </div>
      </div>
    </div>
  );
}