import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Loja Maçônica Eliphas Levi</h3>
            <p className="text-emerald-100">
              Uma instituição dedicada aos valores da Liberdade, Igualdade e Fraternidade,
              promovendo o desenvolvimento moral e intelectual de seus membros.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-emerald-100 hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/mason" className="text-emerald-100 hover:text-white">
                  Área Maçons
                </Link>
              </li>
              <li>
                <Link href="/member" className="text-emerald-100 hover:text-white">
                  Área Membros
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="text-emerald-100">
              <p>São Paulo - SP</p>
              <p>Email: contato@eliphaslevi.org.br</p>
              <p>Reuniões: Quartas-feiras às 20h</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-emerald-700">
          <p className="text-center text-emerald-100">
            © {new Date().getFullYear()} Loja Maçônica Eliphas Levi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
