import { useRef, useState } from "react";
import { VolumeX } from "lucide-react";

type Props = {
  /** Caminho do vídeo dentro de /public (ex.: "/videos/vsl.mp4"). */
  src: string;
  /** Imagem que aparece enquanto o vídeo não carrega. Opcional. */
  poster?: string;
  /** Usado como aria-label do vídeo. */
  titulo?: string;
};

export default function VslPlayer({
  src,
  poster,
  titulo = "Vídeo de apresentação",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [comSom, setComSom] = useState(false);

  function ligarSom() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    void video.play();
    setComSom(true);
  }

  return (
    <div className="vsl-reels relative mx-auto aspect-[9/16] overflow-hidden rounded-2xl bg-black shadow-gold ring-1 ring-border">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        aria-label={titulo}
        autoPlay
        muted
        playsInline
        preload="metadata"
        controls={comSom}
      />

      {!comSom && (
        <button
          type="button"
          onClick={ligarSom}
          aria-label="Reproduzir o vídeo com som"
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* Escurecimento para dar profundidade à imagem */}
          <div className="absolute inset-0 bg-black/25" />

          {/* Caixa de chamada à ação */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-vsl-pulse flex flex-col items-center gap-1 rounded-2xl bg-gold/50 px-5 py-3 text-gold-foreground backdrop-blur-[2px] transition-transform duration-200 group-hover:scale-105 group-active:scale-95 sm:gap-1.5 sm:px-7 sm:py-4">
              <span className="text-[11px] font-bold uppercase tracking-wide sm:text-sm">
                O teu vídeo já começou
              </span>
              <VolumeX className="h-7 w-7 sm:h-9 sm:w-9" strokeWidth={2.25} />
              <span className="text-[11px] font-bold uppercase tracking-wide sm:text-sm">
                Clica para ouvir
              </span>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
