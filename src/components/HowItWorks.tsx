const passos = [
  {
    icone: "/images/passos/comprar.jpg",
    titulo: "Compras",
    texto:
      "Logo a seguir ao pagamento, o link para descarregar os ficheiros chega-te ao e-mail.",
  },
  {
    icone: "/images/passos/escolher.jpg",
    titulo: "Escolhes",
    texto:
      "Abres a pasta, vês os 150 modelos e ficas com os santos que te dizem alguma coisa.",
  },
  {
    icone: "/images/passos/imprimir.jpg",
    titulo: "Imprimes",
    texto:
      "Em casa ou numa papelaria ao virar da esquina. Depois é cortar e já podes oferecer.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">
          Como funciona, do pagamento à impressão
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
          São três passos e nenhum deles exige jeito para computadores.
        </p>

        <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
          {passos.map((p) => (
            <div
              key={p.titulo}
              className="cartao-interativo rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-gold/50">
                <img
                  src={p.icone}
                  alt=""
                  loading="lazy"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <h3 className="mt-3 font-semibold text-foreground">{p.titulo}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.texto}</p>
            </div>
          ))}
        </div>

        <figure className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <img
            src="/images/como-utilizar-marcadores.png"
            alt="Como utilizar os marcadores catolicos em quatro passos: comprar e receber o PDF, imprimir, cortar e usar na Biblia, nos livros ou no missal."
            loading="lazy"
            className="w-full"
          />
        </figure>

        <div className="mt-6 flex flex-col items-center gap-2">
          <a
            href="#oferta"
            className="inline-flex w-full max-w-sm items-center justify-center rounded-xl bg-gradient-gold px-6 py-4 text-base font-bold text-gold-foreground shadow-gold transition duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] sm:text-lg"
          >
            QUERO OS MEUS MARCADORES
          </a>
          <p className="text-xs text-muted-foreground">
            Pagamento único. Descarregas logo a seguir.
          </p>
        </div>
      </div>
    </section>
  );
}
