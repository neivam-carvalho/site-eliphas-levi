import Navigation from './Navigation'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-emerald-900 text-emerald-100 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ARLS Eliphas Levi</h3>
              <p className="text-emerald-200">
                Fundada em 22 de novembro de 1999
              </p>
              <p className="text-emerald-200 mt-2">
                "Conhece-te a Ti Mesmo"
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-emerald-200">
                Rua Guaimbé, 192<br />
                Mooca - São Paulo - SP
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Filosofia</h3>
              <p className="text-emerald-200">
                Liberdade, Igualdade, Fraternidade
              </p>
              <p className="text-emerald-200 mt-2">
                Ciência, Justiça e Trabalho
              </p>
            </div>
          </div>
          <div className="border-t border-emerald-700 pt-6 mt-8">
            <p className="text-center text-emerald-300">
              © 2024 ARLS Eliphas Levi. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout