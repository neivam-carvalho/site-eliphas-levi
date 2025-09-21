import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-600 rounded-full mb-6 shadow-lg">
                <span className="text-3xl font-bold">EL</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              ARLS Eliphas Levi
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Augusta e Respeitável Loja Simbólica
            </p>
            <p className="text-lg text-emerald-200 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
              Fundada em 22 de novembro de 1999 • "Conhece-te a Ti Mesmo"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <Link href="/quem-somos" className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg">
                Conheça Nossa História
              </Link>
              <Link href="/estudos" className="border-2 border-emerald-300 text-emerald-100 hover:bg-emerald-700 hover:border-emerald-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                Nossos Estudos
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-emerald-50 to-transparent"></div>
      </section>

      {/* Boas-vindas Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Bem-vindos
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Sejam bem-vindos ao site da <strong>Augusta e Respeitável Loja Simbólica Eliphas Levi</strong>, 
                  fundada em 22 de novembro de 1999, jurisdicionada ao Grande Oriente de São Paulo, 
                  federada ao Grande Oriente do Brasil.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nossa Loja dedica-se ao estudo dos ensinamentos maçônicos tradicionais, 
                  da filosofia hermética e dos mistérios da antiguidade, sempre guiados pelo 
                  princípio délfico <em>"Conhece-te a Ti Mesmo"</em>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Aqui você encontrará textos, estudos e reflexões sobre a Maçonaria, 
                  a Filosofia Rosacruz, e os ensinamentos esotéricos que iluminam 
                  o caminho do autoconhecimento e da evolução espiritual.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-300">
              <div className="bg-emerald-50 rounded-lg p-8 shadow-lg border border-emerald-100">
                <h3 className="text-2xl font-semibold text-emerald-800 mb-4">Nossa Filosofia</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">Liberdade de pensamento e consciência</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">Igualdade entre todos os seres humanos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">Fraternidade universal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span className="text-gray-700">Busca constante pela verdade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seções de Destaque */}
      <section className="py-16 lg:py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Nossos Conteúdos
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Estudos */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up">
              <div className="p-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">📚</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Estudos Esotéricos</h3>
                <p className="text-gray-600 mb-4">
                  Interpretação simbólica, estudos bíblicos e filosofia hermética para o desenvolvimento espiritual.
                </p>
                <Link href="/estudos" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Explore os estudos →
                </Link>
              </div>
            </div>

            {/* Card Filosofia Rosacruz */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-200">
              <div className="p-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">🌹</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Filosofia Rosacruz</h3>
                <p className="text-gray-600 mb-4">
                  Os ensinamentos de Christian Rosenkreuz e a tradição esotérica do Ocidente.
                </p>
                <Link href="/filosofia-rosacruz" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Conheça a filosofia →
                </Link>
              </div>
            </div>

            {/* Card Maçonaria */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animation-delay-400">
              <div className="p-6">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl text-white">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">O que é Maçonaria</h3>
                <p className="text-gray-600 mb-4">
                  Compreenda os princípios filosóficos, filantrópicos e progressistas da Arte Real.
                </p>
                <Link href="/o-que-e-maconaria" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Descubra mais →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eliphas Levi Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Eliphas Levi
            </h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Eliphas Levi Zahed</strong> é a tradução hebraica de Alphonse Louis Constant, 
                  abade francês nascido em 8 de fevereiro de 1810 em Paris. Considerado o maior 
                  ocultista do século XIX, era filho de um modesto sapateiro e dedicou sua vida 
                  ao estudo das ciências herméticas.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Após seus estudos em Teologia e seu ingresso nas ordens religiosas, Eliphas 
                  tornou-se um dos maiores estudiosos do ocultismo e esoterismo de seu tempo, 
                  deixando um legado imenso através de suas obras sobre magia, cabala e filosofia hermética.
                </p>
                <Link href="/quem-somos" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium">
                  Saiba mais sobre nossa história →
                </Link>
              </div>
            </div>
            
            <div className="animate-fade-in-up animation-delay-300">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg p-8 text-white shadow-xl">
                <h3 className="text-2xl font-semibold mb-6">Localização</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-emerald-200 text-xl">📍</span>
                    <div>
                      <p className="font-medium">Endereço:</p>
                      <p className="text-emerald-100">
                        Rua Guaimbé, 192<br />
                        Mooca - São Paulo - SP
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-emerald-200 text-xl">📅</span>
                    <div>
                      <p className="font-medium">Fundada em:</p>
                      <p className="text-emerald-100">22 de novembro de 1999</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}