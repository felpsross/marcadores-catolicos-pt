const bonusImagens = [
  {
    src: "/images/bonus/marcadores-criancas.png",
    legenda: "Bónus 2: 16 Marcadores Infantis",
    alt: "Folha de marcadores para crianças com histórias bíblicas: a Arca de Noé, Jesus e as crianças, o Bom Pastor e o Nascimento de Jesus.",
  },
  {
    src: "/images/bonus/salmos-explicados.png",
    legenda: "Bónus 3: 150 Salmos Explicados",
    alt: "Capa do guia Salmos Explicados verso a verso, com uma Bíblia aberta no Salmo 23 e uma ovelha ao lado.",
  },
  {
    src: "/images/bonus/playlist-mariana.png",
    legenda: "Bónus 4: Playlist com +100 músicas marianas",
    alt: "Capa da playlist com mais de 100 músicas marianas e católicas, com Nossa Senhora e um telemóvel a tocar Ave Maria.",
  },
];

const itens = [
  "150 modelos exclusivos em alta resolução",
  "Tamanho ideal 5x15 cm, perfeito para Bíblia e livros",
  "Maria, Jesus, santos, anjos, versículos e mais",
  "Ficheiro digital, acesso imediato no e-mail",
  "Imprimes quantas vezes quiseres",
];

export default function WhatYouGet() {
  return (
    <section id="tudo-receber" className="bg-card py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Tudo o que vais receber
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted-foreground">
          Fica tudo teu de uma só vez, sem mensalidades e sem nada para
          renovar.
        </p>

        <div className="mt-8 grid items-center gap-6 sm:grid-cols-[260px_1fr]">
          <figure className="overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
            <img
              src="/images/capa-150-marcadores.png"
              alt="Capa da coleção premium: 150 marcadores católicos para páginas, prontos para imprimir, com Nossa Senhora de Fátima, Santo António, Nossa Senhora do Rosário e outros."
              loading="lazy"
              className="w-full"
            />
          </figure>

          <ul className="space-y-3 text-left text-base">
            {itens.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-0.5 text-success">✓</span>
                <span className="font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-center text-sm">
          ✨ Por mais 7 euros, garante os <strong>4 BÓNUS</strong> que vão na
          oferta completa
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {bonusImagens.map((b) => (
            <figure
              key={b.src}
              className="cartao-interativo overflow-hidden rounded-2xl border border-border bg-background shadow-soft"
            >
              <img src={b.src} alt={b.alt} loading="lazy" className="w-full" />
              <figcaption className="px-3 py-2 text-center text-xs font-semibold text-muted-foreground">
                {b.legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
