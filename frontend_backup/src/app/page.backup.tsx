import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-emerald-50">
      {/* Hero Section */}
      <section className="bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Loja Maçônica Eliphas Levi
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100">
              Liberdade, Igualdade e Fraternidade
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto text-emerald-50">
              Uma instituição centenária dedicada ao desenvolvimento moral, intelectual e espiritual, 
              promovendo os valores universais da Maçonaria em São Paulo.
            </p>
            <div className="space-x-4">
              <Link 
                href="#about" 
                className="bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
              >
                Conhecer Nossa História
              </Link>
              <Link 
                href="/mason" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-700 transition-colors"
              >
                Área Maçons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre Nossa Loja
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A Loja Maçônica Eliphas Levi é uma das mais respeitadas instituições maçônicas de São Paulo, 
              dedicada aos princípios eternos da Maçonaria Universal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Liberdade</h3>
              <p className="text-gray-600">
                Promovemos a liberdade de pensamento e expressão, respeitando as convicções individuais.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Igualdade</h3>
              <p className="text-gray-600">
                Todos os homens são iguais em dignidade, independente de origem, religião ou condição social.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fraternidade</h3>
              <p className="text-gray-600">
                Cultivamos laços fraternais baseados no respeito mútuo e na solidariedade humana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa História
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Fundada nos princípios da tradição maçônica universal, a Loja Eliphas Levi tem sido um 
              farol de conhecimento e fraternidade em São Paulo. Nossos trabalhos são conduzidos com 
              respeito às antigas tradições, sempre buscando o aperfeiçoamento moral e intelectual de 
              nossos membros e contribuindo para o bem-estar da sociedade.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Áreas Restritas
            </h2>
            <p className="text-lg text-gray-600">
              Acesso exclusivo para irmãos maçons e membros da nossa loja.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Área Maçons</h3>
              <p className="text-gray-600 mb-6">
                Conteúdo exclusivo para irmãos maçons. Acesso mediante senha específica 
                fornecida pela loja.
              </p>
              <Link 
                href="/mason" 
                className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors inline-block"
              >
                Acessar Área Maçons
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Área Membros</h3>
              <p className="text-gray-600 mb-6">
                Área restrita para membros da loja com login individual e acesso 
                personalizado aos conteúdos internos.
              </p>
              <Link 
                href="/login" 
                className="bg-emerald-600 text-white px-6 py-2 rounded-md hover:bg-emerald-700 transition-colors inline-block"
              >
                Entrar na Área Membros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Entre em Contato
          </h2>
          <p className="text-lg mb-8 text-emerald-100">
            Tem interesse em conhecer mais sobre a Maçonaria? Entre em contato conosco.
          </p>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
                  placeholder="Assunto da sua mensagem"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
