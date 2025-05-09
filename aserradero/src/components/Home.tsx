
export const Home = () => {
    return (
        <main>
            <section className="bg-[#f5f1e9]/90 min-h-screen">
                <section className="text-center py-20 px-6">
                    <h2 className="text-5xl font-extrabold mb-4 text-brown-800">Transformamos la madera en confianza</h2>
                    <p className="text-xl text-brown-700 max-w-2xl mx-auto mb-8">
                        Desde troncos hasta estructuras, brindamos calidad, tradición y compromiso desde hace más de 40 años.
                    </p>                    
                </section>
            </section>
            <section id="servicios" className="px-6 py-16 bg-[#ede4d3]">
                <h3 className="text-3xl font-bold text-center mb-10">Nuestros Servicios</h3>
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        { title: 'Corte a medida', desc: 'Precisión en cada tabla para tus necesidades específicas.' },
                        { title: 'Venta de madera tratada', desc: 'Maderas secas y listas para tus proyectos.' },
                        { title: 'Fabricación de estructuras', desc: 'Pérgolas, techos y más, con el mejor acabado.' }, 
                    ].map((serv, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                            <h4 className="text-xl font-semibold mb-2">{serv.title}</h4>
                            <p className="text-brown-700">{serv.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
