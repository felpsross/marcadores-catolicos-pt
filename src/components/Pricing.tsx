import { ArrowUp, Check, X } from "lucide-react";

const base = [
  "150 marcadores premium prontos para imprimir",
  "Tamanho 5x15 cm, ideal para Bíblia e livros",
  "Ficheiro digital, acesso imediato por 6 meses",
];

const bonus = [
  "🎁 Bónus 1: Guia de Impressão Perfeita",
  "🎁 Bónus 2: 16 Marcadores Infantis",
  "🎁 Bónus 3: 150 Salmos Explicados (+700 páginas)",
  "🎁 Bónus 4: Playlist com +100 músicas marianas",
];

export default function Pricing() {
  return (
    <section id="oferta" className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Escolhe como queres começar
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted-foreground">
          Mandar imprimir três marcadores numa gráfica já te sai mais caro do
          que isto. Aqui pagas uma vez e ficas com os 150.
        </p>

        {/* Card premium (destaque) */}
        <div className="cartao-interativo relative mx-auto mt-8 max-w-md overflow-hidden rounded-3xl border-2 border-gold/60 bg-gradient-to-br from-background to-gold/5 shadow-gold">
          <div className="absolute right-4 top-4 z-10 rounded-full bg-gradient-gold px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-gold-foreground">
            Mais escolhida
          </div>
          <div className="bg-gradient-gold px-5 py-3 text-center text-xs font-extrabold uppercase tracking-wider text-gold-foreground">
            Super Oferta • Mais escolhida
          </div>

          <div className="p-6 text-center">
            <img
              src="/images/oferta-premium.png"
              alt="Caixa dos 150 marcadores católicos com os 4 bónus: guia de impressão perfeita, marcadores para crianças, 150 salmos explicados e 100 músicas marianas."
              loading="lazy"
              className="mx-auto w-full rounded-xl shadow-soft"
            />
            <h3 className="mt-5 text-xl font-bold text-primary">
              150 Marcadores Católicos + Bónus
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              A coleção toda, os 4 bónus e acesso vitalício.
            </p>

            <ul className="mt-4 space-y-2 text-left text-sm">
              {base.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="h-5 w-5 shrink-0 text-success" /> {item}
                </li>
              ))}
              {bonus.map((b) => (
                <li key={b} className="flex gap-2">
                  <Check className="h-5 w-5 shrink-0 text-success" /> {b}
                </li>
              ))}
              <li className="flex gap-2">
                <Check className="h-5 w-5 shrink-0 text-success" /> Acesso
                Vitalício
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-center text-sm">
              ✨ Com os <strong>4 BÓNUS</strong> incluídos
            </div>

            <div className="mt-5">
              <div className="text-xs text-muted-foreground line-through">
                De € 29,90
              </div>
              <div className="text-3xl font-extrabold text-primary">
                € 12,90
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                Pagamento único. Dá cerca de 9 cêntimos por marcador, com tudo dentro.
              </div>
            </div>

            <a
              href="#checkout-premium"
              className="mt-4 inline-flex w-full max-w-sm items-center justify-center rounded-xl bg-gradient-gold px-6 py-4 text-base font-bold text-gold-foreground shadow-gold transition duration-200 hover:brightness-110 active:scale-[0.98] animate-breathe sm:text-lg"
            >
              QUERO A OFERTA COMPLETA
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              Tens 14 dias para pedir o dinheiro de volta.
            </p>
          </div>
        </div>

        {/* Card básico (âncora) */}
        <div className="cartao-interativo mx-auto mt-6 max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="bg-secondary px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            Oferta Básica
          </div>

          <div className="p-6 text-center">
            <img
              src="/images/oferta-basica.png"
              alt="Coleção de 150 marcadores católicos para páginas, prontos para imprimir, com Nossa Senhora de Fátima, Jesus Cristo e Nossa Senhora do Rosário."
              loading="lazy"
              className="mx-auto w-full rounded-xl shadow-soft"
            />
            <h3 className="mt-5 text-xl font-bold text-primary">
              150 Marcadores Católicos
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              A coleção toda, sem os bónus.
            </p>

            <ul className="mt-4 space-y-2 text-left text-sm">
              {base.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="h-5 w-5 shrink-0 text-success" /> {item}
                </li>
              ))}
              {bonus.map((b) => (
                <li
                  key={b}
                  className="flex gap-2 text-muted-foreground line-through"
                >
                  <X className="h-5 w-5 shrink-0 text-destructive" /> {b}
                </li>
              ))}
            </ul>

            <div className="mt-5">
              <div className="text-xs text-muted-foreground line-through">
                De € 19,90
              </div>
              <div className="text-3xl font-extrabold text-primary">€ 5,90</div>
              <div className="mt-1 text-xs text-muted-foreground">
                Pagamento único. Sai a cerca de 4 cêntimos por marcador.
              </div>
            </div>

            <a
              href="#checkout-basico"
              className="mt-4 inline-flex w-full items-center justify-center rounded-xl border-2 border-primary bg-background px-6 py-3.5 text-base font-bold text-primary transition duration-200 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
            >
              Quero a oferta básica
            </a>
          </div>

          <div className="border-t border-dashed border-gold/50 bg-gold/10 px-5 py-4 text-center">
            <p className="text-sm font-semibold text-foreground">
              ⚠️ Por mais 7 euros levas também os 4 bónus e o acesso vitalício.
              Vê aqui em cima.
            </p>
            <ArrowUp className="mx-auto mt-2 h-7 w-7 animate-pulse-arrow-up text-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
