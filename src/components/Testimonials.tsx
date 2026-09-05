import { Star } from "lucide-react";

// Substitui por depoimentos reais de clientes antes de publicares.
const depoimentos = [
  {
    foto: "/images/depoimentos/maria-conceicao.jpg",
    nome: "Maria Conceição",
    cidade: "Braga",
    texto:
      "Comprei para dar à minha mãe e acabei por imprimir para o grupo do terço todo. Ficaram tão bem que ninguém acreditou que tinham saído da minha impressora.",
  },
  {
    foto: "/images/depoimentos/antonio-silva.jpg",
    nome: "António Silva",
    cidade: "Porto",
    texto:
      "Descarreguei à noite e no domingo já os levei para a missa. Imprimi em papel fotográfico e ficaram como os que se vendem na loja da igreja.",
  },
  {
    foto: "/images/depoimentos/fatima-costa.jpg",
    nome: "Fátima Costa",
    cidade: "Coimbra",
    texto:
      "São mesmo 150 diferentes, não vi nenhum repetido. Uso na catequese e cada criança escolhe o seu santo.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          O que diz quem já comprou
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted-foreground">
          Recebemos mensagens de todo o país. Estas são algumas.
        </p>
        <p className="mt-2 text-center text-xs text-muted-foreground sm:hidden">
          Arrasta para o lado para leres os outros
        </p>

        <div className="carrossel mt-8 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((d) => (
            <article
              key={d.nome}
              className="cartao-interativo rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <div className="mb-3 flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-foreground">
                "{d.texto}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={d.foto}
                  alt={d.nome}
                  loading="lazy"
                  className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-gold/40"
                />
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    {d.nome}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {d.cidade}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
