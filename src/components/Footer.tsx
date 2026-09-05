export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-5xl px-4 text-center text-xs text-muted-foreground">
        <p>Este site não é afiliado ao Facebook/Meta.</p>
        <p className="mt-2">
          Ao continuar, concordas com os nossos{" "}
          <a href="/termos" className="underline hover:text-foreground">
            Termos
          </a>{" "}
          e a{" "}
          <a href="/privacidade" className="underline hover:text-foreground">
            Política de Privacidade
          </a>
          , em conformidade com o RGPD (Regulamento Geral de Proteção de
          Dados).
        </p>
        <p className="mt-4">
          © {new Date().getFullYear()}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
