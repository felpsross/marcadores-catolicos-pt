import { ChevronDown } from "lucide-react";
import { useState } from "react";

/**
 * ATENÇÃO: confirma os detalhes marcados abaixo antes de publicares —
 * formatos dos ficheiros, meios de pagamento aceites, licença de uso e
 * e-mail de suporte. Ajusta os textos ao que realmente entregas.
 */
const perguntas: { pergunta: string; resposta: string[] }[] = [
  {
    pergunta: "Como e quando recebo os ficheiros?",
    resposta: [
      "A entrega é automática. Mal o pagamento seja confirmado, recebes um e-mail com o link para descarregares os 150 marcadores. Costuma chegar em menos de dois minutos.",
      "Não vai nada pelo correio, por isso também não pagas portes nem ficas à espera de nenhuma encomenda.",
      "Se o e-mail não aparecer na caixa de entrada, vale a pena espreitar o spam e a pasta de promoções. Continua sem aparecer? Escreve-nos que reenviamos o acesso à mão, no mesmo dia.",
    ],
  },
  {
    pergunta: "Em que formato vêm os marcadores?",
    resposta: [
      "Vêm já montados e prontos a imprimir, em alta resolução de 300 DPI. É a qualidade com que as gráficas trabalham, por isso ficam nítidos mesmo depois de impressos.",
      "Cada marcador mede 5 x 15 cm, aquele formato clássico que assenta bem no missal ou num livro normal.",
      "Não tens de redimensionar nem de acertar margens. Abres o ficheiro e mandas imprimir.",
    ],
  },
  {
    pergunta: "Preciso de perceber de computadores ou de design?",
    resposta: [
      "Não precisas. Os ficheiros não se editam: já vêm fechados e prontos.",
      "Não é preciso instalar Photoshop, Canva nem nada do género.",
      "Também funciona pelo telemóvel. Descarregas para o telefone e envias dali mesmo para uma impressora com wi-fi ou para a loja onde vais mandar imprimir.",
    ],
  },
  {
    pergunta: "Que papel e que impressora devo usar?",
    resposta: [
      "Numa impressora doméstica normal já ficam bonitos. Se quiseres um marcador mais rijo, que aguente ser manuseado, usa cartolina de 250 g ou papel fotográfico.",
      "Nas definições de impressão escolhe a qualidade alta e o tamanho real (100%), senão a impressora encolhe a folha e as medidas saem trocadas.",
      "O Guia de Impressão, que vai na oferta completa, leva-te por tudo isto passo a passo: que papel comprar, o que carregar na impressora, como cortar direito e como plastificar, se quiseres que durem anos.",
    ],
  },
  {
    pergunta: "Posso mandar imprimir numa loja ou papelaria?",
    resposta: [
      "Podes, e é o que compensa quando precisas de muitas cópias. Como os ficheiros estão em 300 DPI, qualquer gráfica ou papelaria os aceita sem levantar problemas.",
      "Levas o ficheiro numa pen, mostras no telemóvel ou envias por e-mail para a loja.",
      "Costuma ficar mais barato do que comprar marcadores já feitos, e escolhes exatamente os santos que queres.",
    ],
  },
  {
    pergunta: "Quantas vezes posso imprimir?",
    resposta: [
      "Sem limite. Pagas uma vez e os ficheiros ficam teus, sem mensalidades.",
      "Podes imprimir meia dúzia esta semana e, daqui a uns meses, mais cem para a catequese, para o grupo de oração ou para um batizado.",
      "O uso é pessoal e para ofereceres a quem quiseres. O que não podes é revender os ficheiros.",
    ],
  },
  {
    pergunta: "O pagamento é seguro?",
    resposta: [
      "É. O pagamento é tratado por uma plataforma de checkout certificada, numa página encriptada, e os teus dados nunca ficam guardados neste site.",
      "O comprovativo da compra chega-te por e-mail, junto com o link de acesso.",
    ],
  },
  {
    pergunta: "E se eu não gostar?",
    resposta: [
      "Tens 14 dias a contar da compra. Dá tempo de descarregar tudo, imprimir uns quantos e ver se valeu a pena.",
      "Se achares que não, mandas-nos um e-mail dentro desse prazo e devolvemos o valor por inteiro. Não perguntamos porquê nem te pomos a preencher formulários.",
    ],
  },
];

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section className="bg-card py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-center text-2xl font-bold text-primary sm:text-3xl">
          Perguntas frequentes
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-base text-muted-foreground">
          Se ficar alguma dúvida por responder, escreve-nos. Respondemos no
          próprio dia.
        </p>

        <div className="mt-8 space-y-3">
          {perguntas.map((item, i) => {
            const estaAberto = aberto === i;
            return (
              <div
                key={item.pergunta}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-colors duration-200 hover:border-gold/40"
              >
                <button
                  onClick={() => setAberto(estaAberto ? null : i)}
                  aria-expanded={estaAberto}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-200 hover:bg-gold/5 active:bg-gold/10"
                >
                  <span className="text-sm font-semibold text-foreground">
                    {item.pergunta}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${estaAberto ? "rotate-180" : ""}`}
                  />
                </button>
                {estaAberto && (
                  <div className="space-y-3 px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                    {item.resposta.map((paragrafo, idx) => (
                      <p key={idx}>{paragrafo}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
