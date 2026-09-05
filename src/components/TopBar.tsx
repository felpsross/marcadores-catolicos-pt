import { useEffect, useState } from "react";

function getTodayFormatted() {
  const d = new Date();
  return d.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function TopBar() {
  // Contagem regressiva de exemplo: 3h29m a partir do carregamento.
  // Ajusta o valor inicial (em segundos) conforme a tua estratégia de urgência.
  const [secondsLeft, setSecondsLeft] = useState(3 * 3600 + 29 * 60 + 25);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hh = String(Math.floor(secondsLeft / 3600)).padStart(2, "0");
  const mm = String(Math.floor((secondsLeft % 3600) / 60)).padStart(2, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="bg-gradient-brown text-primary-foreground">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-1 px-4 py-2 text-center text-xs sm:flex-row sm:gap-3 sm:text-sm">
        <span>⚡ Preço de hoje, {getTodayFormatted()}</span>
        <span className="hidden text-gold/60 sm:inline">•</span>
        <span>
          Acaba dentro de{" "}
          <strong>
            {hh}:{mm}:{ss}
          </strong>
        </span>
      </div>
    </div>
  );
}
