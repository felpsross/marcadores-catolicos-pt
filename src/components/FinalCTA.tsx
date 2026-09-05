export default function FinalCTA() {
  return (
    <section className="bg-gradient-brown py-14 text-primary-foreground">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Ainda hoje podes ter os teus{" "}
          <span className="text-gold">150 marcadores</span> a sair da
          impressora
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-white/80">
          A coleção completa, o acesso na hora e 14 dias para mudares de
          ideias. O que não volta é o preço de hoje.
        </p>

        <div className="mt-7 flex flex-col items-center gap-3">
          <a
            href="#oferta"
            className="inline-flex w-full max-w-sm items-center justify-center rounded-xl bg-gradient-gold px-6 py-4 text-base font-extrabold text-gold-foreground shadow-gold transition duration-200 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] sm:text-lg"
          >
            QUERO OS MEUS MARCADORES
          </a>
          <p className="text-xs text-white/70">
            Pagamento encriptado. O acesso chega ao teu e-mail.
          </p>
        </div>
      </div>
    </section>
  );
}
