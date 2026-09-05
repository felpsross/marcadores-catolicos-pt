import { Lock, Sparkles } from "lucide-react";
import VslPlayer from "./VslPlayer";

const provas = [
  "Recebes na hora",
  "Imprimes as vezes que quiseres",
  "14 dias de garantia",
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />

      <div className="relative mx-auto max-w-5xl px-4 pt-8 pb-10 sm:pt-14 sm:pb-16">
        {/* Badge */}
        <div className="mx-auto mb-5 flex max-w-fit flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium text-foreground">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <span>Coleção Premium • 150 modelos exclusivos</span>
          <span className="hidden text-gold/60 sm:inline">•</span>
          <a
            href="https://www.instagram.com/santuariocatolicopt/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold underline-offset-2 hover:underline"
          >
            Oficial @santuariocatolicopt
          </a>
        </div>

        {/* Título */}
        <div className="mx-auto max-w-3xl rounded-2xl border-2 border-gold bg-accent px-5 py-5 shadow-soft sm:px-8 sm:py-7">
          <h1 className="text-balance text-center text-3xl font-extrabold leading-tight text-primary sm:text-5xl">
            150 Marcadores Católicos de Página{" "}
            <span className="text-gold">para imprimires ainda hoje</span>
          </h1>
        </div>

        {/* Subtítulo */}
        <p className="mx-auto mt-4 max-w-2xl text-balance text-center text-base text-muted-foreground sm:text-lg">
          Nossa Senhora de Fátima, o Sagrado Coração de Jesus, Santo António e
          os outros santos de sempre. São ficheiros em alta resolução: fazes o
          download, imprimes em casa e usas as vezes que te apetecer. Não há
          encomendas à espera nem programas para instalar.
        </p>

        {/* Vídeo (VSL) */}
        <div className="mt-8 sm:mt-10">
          {/* Coloca o ficheiro do vídeo em public/videos/vsl.mp4 */}
          <VslPlayer
            src="/videos/vsl.mp4"
            titulo="150 Marcadores Católicos de Página"
          />
        </div>

        {/* CTA */}
        <div className="mt-7 flex flex-col items-center gap-3">
          <a
            href="#oferta"
            className="inline-flex w-full max-w-sm items-center justify-center rounded-xl bg-gradient-gold px-6 py-4 text-base font-bold text-gold-foreground shadow-gold transition duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] sm:text-lg"
          >
            QUERO OS MEUS MARCADORES
          </a>
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            {provas.map((p) => (
              <li key={p} className="flex items-center gap-1.5">
                <span className="text-success">✓</span> {p}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" /> Pagamento encriptado. O acesso
            chega ao teu e-mail.
          </div>
        </div>
      </div>
    </header>
  );
}
