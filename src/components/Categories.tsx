const categorias = [
  { nome: "Nossa Senhora de Fátima", qtd: 28 },
  { nome: "Santo António", qtd: 20 },
  { nome: "Sagrado Coração de Jesus", qtd: 24 },
  { nome: "São Judas Tadeu", qtd: 16 },
  { nome: "Divina Misericórdia", qtd: 18 },
  { nome: "Espírito Santo", qtd: 14 },
  { nome: "Nossa Senhora do Rosário", qtd: 16 },
  { nome: "Santos Populares", qtd: 14 },
];

export default function Categories() {
  return (
    <section className="bg-gradient-brown py-12 text-primary-foreground sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          8 categorias <span className="text-gold">devocionais</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-white/80">
          As devoções que se rezam cá em casa desde sempre, reunidas num só
          pacote.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((c) => (
            <div
              key={c.nome}
              className="cartao-interativo flex items-center justify-between rounded-xl bg-white/5 p-4 ring-1 ring-white/10 hover:bg-white/10"
            >
              <span className="text-sm font-medium">{c.nome}</span>
              <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-xs font-bold text-gold">
                {c.qtd}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-white/70">
          Seja para quem for que estejas a pensar, há de haver aqui um santo à
          medida.
        </p>
      </div>
    </section>
  );
}
