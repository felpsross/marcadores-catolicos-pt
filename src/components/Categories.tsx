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
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          8 categorias <span className="text-ring">devocionais</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted-foreground">
          As devoções que se rezam cá em casa desde sempre, reunidas num só
          pacote.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categorias.map((c) => (
            <div
              key={c.nome}
              className="cartao-interativo flex items-center justify-between rounded-xl border border-border bg-card p-4 shadow-soft"
            >
              <span className="text-sm font-medium">{c.nome}</span>
              <span className="rounded-full border border-gold/40 bg-gold/15 px-2.5 py-0.5 text-xs font-bold text-primary">
                {c.qtd}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Seja para quem for que estejas a pensar, há de haver aqui um santo à
          medida.
        </p>
      </div>
    </section>
  );
}
