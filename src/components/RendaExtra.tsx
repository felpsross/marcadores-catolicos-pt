import { Church, Coins, Gift, Heart, ShoppingBag, Store, TrendingUp, Users } from "lucide-react";

const motivos = [
  {
    Icone: Coins,
    titulo: "Custa cêntimos a produzir",
    texto:
      "Uma folha A4 dá oito marcadores. O papel e a tinta são o teu único gasto, e o ficheiro já é teu para sempre.",
  },
  {
    Icone: Heart,
    titulo: "Vende-se sozinho",
    texto:
      "Não estás a vender um papel qualquer. Estás a pôr Nossa Senhora e os santos na mão de quem já os ama.",
  },
  {
    Icone: Gift,
    titulo: "Serve para tudo",
    texto:
      "Batizados, crismas, casamentos, novenas, catequese. Há sempre uma ocasião a precisar de uma lembrança bonita.",
  },
  {
    Icone: TrendingUp,
    titulo: "Começas pequeno",
    texto:
      "Imprimes meia dúzia, vês a reação das pessoas e só depois imprimes mais. Não ficas com stock parado.",
  },
];

const ondeVender = [
  { Icone: Church, texto: "Paróquias e grupos" },
  { Icone: Store, texto: "Feiras e romarias" },
  { Icone: ShoppingBag, texto: "Lojas religiosas" },
  { Icone: Users, texto: "Amigos e família" },
];

export default function RendaExtra() {
  return (
    <section id="renda-extra" className="bg-secondary py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <p className="text-center text-xs font-extrabold uppercase tracking-widest text-gold">
          E se ainda te desse dinheiro?
        </p>
        <h2 className="mt-2 text-center text-2xl font-bold text-primary sm:text-3xl">
          Os mesmos marcadores podem virar uma renda extra
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-base text-muted-foreground">
          Muita gente compra a coleção para si e acaba a imprimir para os
          outros. Começa pelo grupo da catequese, pela venda depois da missa,
          pela feira da terra. É fé que passa de mão em mão e ainda te deixa
          alguma coisa no bolso.
        </p>

        <div className="mt-8 grid items-center gap-8 sm:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <img
              src="/images/renda-extra-marcadores.png"
              alt="Marcadores católicos junto de uma Bíblia, com as vantagens de os revender: baixo custo de produção, produto que evangeliza, presente perfeito e renda extra."
              loading="lazy"
              className="w-full"
            />
          </figure>

          <div>
            <ul className="space-y-4">
              {motivos.map(({ Icone, titulo, texto }) => (
                <li key={titulo} className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground">
                    <Icone className="h-5 w-5" />
                  </span>
                  <span>
                    <strong className="font-semibold text-foreground">
                      {titulo}
                    </strong>
                    <br />
                    <span className="text-sm text-muted-foreground">
                      {texto}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-gold/40 bg-gold/10 p-5">
              <p className="text-sm font-semibold text-foreground">
                Faz as contas contigo:
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                O pacote completo custa{" "}
                <strong className="text-foreground">€ 12,90</strong>, uma vez
                só. Se venderes{" "}
                <strong className="text-foreground">
                  20 marcadores a 1,50 €
                </strong>
                , são 30 €. Já pagaste a coleção e ficaste com os 150 modelos
                para imprimir sempre que quiseres.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                É uma conta de exemplo, não uma promessa. O que vendes depende
                de ti e do preço que escolheres.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm font-semibold uppercase tracking-wider text-primary">
          Onde é que isto se vende bem
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {ondeVender.map(({ Icone, texto }) => (
            <div
              key={texto}
              className="cartao-interativo flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-center text-sm font-medium text-foreground shadow-soft"
            >
              <Icone className="h-6 w-6 text-gold" />
              {texto}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-2">
          <a
            href="#oferta"
            className="inline-flex w-full max-w-sm items-center justify-center rounded-xl bg-gradient-gold px-6 py-4 text-base font-bold text-gold-foreground shadow-gold transition duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] sm:text-lg"
          >
            QUERO COMEÇAR HOJE
          </a>
          <p className="text-xs text-muted-foreground">
            Pagas uma vez, imprimes quantas vezes quiseres.
          </p>
        </div>
      </div>
    </section>
  );
}
