const modelos = [
  {
    src: "/images/modelos-nossa-senhora-fatima.png",
    titulo: "Nossa Senhora de Fátima",
    alt: "Folha com oito marcadores de Nossa Senhora de Fátima: Ave Maria, Totus Tuus, Sob Vossa Proteção e outros.",
  },
  {
    src: "/images/modelos-sagrado-coracao.png",
    titulo: "Sagrado Coração de Jesus",
    alt: "Folha com oito marcadores do Sagrado Coração de Jesus, com frases do Evangelho.",
  },
  {
    src: "/images/modelos-jesus.png",
    titulo: "Jesus e o Evangelho",
    alt: "Folha com oito marcadores de Jesus: Cristo Redentor, o Bom Pastor, Luz do Mundo e outros.",
  },
  {
    src: "/images/modelos-anjos.png",
    titulo: "Anjos e Arcanjos",
    alt: "Folha com oito marcadores de anjos: São Miguel, São Gabriel, São Rafael e o Anjo da Guarda.",
  },
  {
    src: "/images/modelos-carlo-acutis-1.jpg",
    titulo: "Carlo Acutis",
    alt: "Folha com oito marcadores de Carlo Acutis, com frases suas sobre a Eucaristia e a santidade.",
  },
  {
    src: "/images/modelos-nossa-senhora-rosario.png",
    titulo: "Nossa Senhora do Rosário",
    alt: "Folha com oito marcadores de Nossa Senhora do Rosário: Ave Maria, Totus Tuus, Mãe do Rosário e outros.",
  },
];

export default function Gallery() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Espreita alguns dos modelos
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted-foreground">
          Cada marcador tem 5 x 15 cm, a medida certa para o missal ou para o
          livro que tens na mesa de cabeceira.
        </p>

        <div className="carrossel mt-8 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {modelos.map((m) => (
            <figure
              key={m.src}
              className="cartao-interativo overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                className="w-full"
              />
              <figcaption className="px-3 py-2 text-center text-xs font-semibold text-muted-foreground">
                {m.titulo}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-3 text-center text-xs text-muted-foreground sm:hidden">
          Arrasta para o lado para veres os outros
        </p>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Estas são só seis folhas. No pacote vão os{" "}
          <strong className="text-foreground">150</strong> marcadores.
        </p>
      </div>
    </section>
  );
}
