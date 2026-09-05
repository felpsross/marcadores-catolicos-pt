const features = [
  {
    icone: "/images/features/impressora.jpg",
    titulo: "Sai nítido no papel",
    texto:
      "Os ficheiros estão a 300 DPI, a resolução que as gráficas pedem. Nada de imagens desfocadas ou com quadradinhos.",
  },
  {
    icone: "/images/features/download.png",
    titulo: "Chega em minutos",
    texto:
      "O link vai para o teu e-mail mal o pagamento entre. Não há portes nem esperas pelos CTT.",
  },
  {
    icone: "/images/features/modelos.jpg",
    titulo: "150 modelos diferentes",
    texto:
      "Dá para oferecer a meia família e ainda assim ninguém receber um igual ao do outro.",
  },
  {
    icone: "/images/features/garantia.jpg",
    titulo: "Podes desistir",
    texto:
      "Tens 14 dias para pedir o dinheiro de volta. Não te perguntamos porquê.",
  },
];

export default function Features() {
  return (
    <section className="bg-card py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Porque vais gostar desta coleção
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted-foreground">
          Pagas uma vez e a coleção fica tua. Serve para esta semana, mas
          também para o Natal, para um batizado ou para a catequese do ano que
          vem.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.titulo}
              className="cartao-interativo group rounded-2xl border border-border bg-background p-5 shadow-soft"
            >
              <div className="mb-3 inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl bg-white ring-1 ring-gold/40 transition-transform duration-200 group-hover:scale-110">
                <img
                  src={f.icone}
                  alt=""
                  loading="lazy"
                  className="h-11 w-11 object-contain"
                />
              </div>
              <h3 className="font-semibold text-foreground">{f.titulo}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
