
// import { useEffect, useRef, useState } from "react";
// import { motion, useReducedMotion } from "framer-motion";

// type TypingSplashProps = {
//   /** Text to type */
//   text?: string;
//   /** ms between chars (randomized around this) */
//   avgSpeed?: number;
//   /** Called when the splash finishes */
//   onDone: () => void;
//   /** Show only once per session */
//   oncePerSession?: boolean;
//   /** Minimum time to show (ms) */
//   minDuration?: number;
// };

// export default function TypingSplash({
//   text = "Welcome to Khaled Mansour Portfolio",
//   avgSpeed = 55,
//   onDone,
//   oncePerSession = true,
//   minDuration = 1200,
// }: TypingSplashProps) {
//   const reduce = useReducedMotion();
//   const [visible, setVisible] = useState(() =>
//     oncePerSession ? sessionStorage.getItem("seenSplash") !== "1" : true
//   );
//   const [typed, setTyped] = useState("");
//   const [isTyping, setIsTyping] = useState(true);

//   // --- Simple “keyboard click” sound using Web Audio (no mp3 needed)
//   const [soundOn, setSoundOn] = useState(false);
//   const audioCtxRef = useRef<AudioContext | null>(null);
//   const canPlaySound = soundOn && audioCtxRef.current?.state === "running";

//   function toggleSound() {
//     if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
//     if (audioCtxRef.current.state === "suspended") audioCtxRef.current.resume();
//     setSoundOn((s) => !s);
//   }

//   function clickSound() {
//     if (!canPlaySound) return;
//     const ctx = audioCtxRef.current!;
//     const osc = ctx.createOscillator();
//     const gain = ctx.createGain();
//     osc.type = "square";
//     osc.frequency.value = 700 + Math.random() * 300;
//     gain.gain.value = 0.0008;
//     gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.03);
//     osc.connect(gain).connect(ctx.destination);
//     osc.start();
//     osc.stop(ctx.currentTime + 0.03);
//   }

//   // --- Typewriter
//   useEffect(() => {
//     if (!visible) return;
//     let i = 0;
//     const started = performance.now();

//     const step = () => {
//       if (reduce) {
//         setTyped(text);
//         setIsTyping(false);
//         finish();
//         return;
//       }
//       if (i < text.length) {
//         setTyped(text.slice(0, i + 1));
//         if (text[i] !== " ") clickSound();
//         i++;
//         const jitter = Math.round(avgSpeed * (0.6 + Math.random() * 0.8));
//         timer = window.setTimeout(step, jitter);
//       } else {
//         setIsTyping(false);
//         const elapsed = performance.now() - started;
//         const waitMore = Math.max(0, minDuration - elapsed);
//         timer = window.setTimeout(finish, waitMore);
//       }
//     };

//     let timer = window.setTimeout(step, 200);
//     return () => window.clearTimeout(timer);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [visible, avgSpeed, text, reduce, soundOn]);

//   function finish() {
//     if (oncePerSession) sessionStorage.setItem("seenSplash", "1");
//     setVisible(false);
//     onDone();
//   }

//   if (!visible) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[9999] grid place-items-center bg-gradient-to-br from-amber-50 via-white to-amber-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-black"
//       role="status"
//       aria-live="polite"
//     >
//       <div className="mx-auto flex w-full max-w-2xl items-center justify-between px-6">
//         <div className="flex-1">
//           <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tight">
//             <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent font-[600]">
//               {typed}
//             </span>
//             <span
//               className={`ml-0.5 inline-block h-7 w-[2px] align-middle bg-amber-600 dark:bg-amber-400 ${
//                 isTyping ? "animate-pulse" : ""
//               }`}
//               aria-hidden="true"
//             />
//           </h1>

//           <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
//             Preparing experience…
//           </p>
//         </div>

//         <div className="ml-6 flex items-center gap-2">
//           <button
//             onClick={toggleSound}
//             className="rounded-full border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
//             aria-pressed={soundOn}
//             aria-label={soundOn ? "Disable typing sound" : "Enable typing sound"}
//             title={soundOn ? "Sound on" : "Sound off"}
//           >
//             {soundOn ? "🔊 Sound" : "🔈 Sound"}
//           </button>

//           <button
//             onClick={finish}
//             className="rounded-full bg-amber-500 px-3 py-1 text-sm font-medium text-white hover:bg-amber-600 focus-visible:ring-2 focus-visible:ring-amber-500"
//             title="Skip"
//           >
//             Skip
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// }




import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type TypingSplashProps = {
  text?: string;
  avgSpeed?: number;          // ms between chars (roughly)
  minDuration?: number;       // minimum time to remain visible
  onDone: () => void;
  oncePerSession?: boolean;
  soundSrc?: string;          // e.g. "/sounds/typing.mp3"
  soundVolume?: number;       // 0..1
};

export default function TypingSplash({
  text = "Welcome to Khaled Mansour Portfolio",
  avgSpeed = 150,
  minDuration = 1200,
  onDone,
  oncePerSession = true,
  soundSrc = "/public/sounds/keyboard-typing-fast-371229.mp3",
  soundVolume = 0.35,
}: TypingSplashProps) {
  const reduce = useReducedMotion();

  const [visible, setVisible] = useState(
    () => (oncePerSession ? sessionStorage.getItem("seenSplash") !== "1" : true)
  );
  const [typed, setTyped] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // --- Sound handling via <audio> pool (avoids cutting sounds)
  const [soundOn, setSoundOn] = useState(false);
  const audioPoolRef = useRef<HTMLAudioElement[]>([]);
  const poolIndexRef = useRef(0);

  useEffect(() => {
    // build a small pool of audio elements
    const POOL_SIZE = 6;
    const pool: HTMLAudioElement[] = Array.from({ length: POOL_SIZE }, () => {
      const a = new Audio(soundSrc);
      a.preload = "auto";
      a.volume = Math.min(Math.max(soundVolume, 0), 1);
      return a;
    });
    audioPoolRef.current = pool;
    return () => {
      pool.forEach((a) => {
        try {
          a.pause();
          
          a.srcObject = null;
        }catch{
            console.log("Error clearing audio pool");
        }
      });
    };
  }, [soundSrc, soundVolume]);

  function playKeyClick() {
    if (!soundOn) return; // browsers require a user gesture first
    const pool = audioPoolRef.current;
    if (!pool.length) return;
    const i = poolIndexRef.current++ % pool.length;
    const a = pool[i];
    try {
      a.currentTime = 0;                            // rewind
      a.playbackRate = 0.95 + Math.random() * 0.2; // little human variation
      void a.play();
    } catch {
      /* ignore autoplay errors */
    }
  }

  // --- Typewriter logic
  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const started = performance.now();
    let timer = 0 as unknown as number;

    const step = () => {
      if (reduce) {
        setTyped(text);
        setIsTyping(false);
        finish();
        return;
      }

      if (i < text.length) {
        const ch = text[i];
        setTyped(text.slice(0, i + 1));
        if (ch !== " ") playKeyClick();
        i++;
        const jitter = Math.round(avgSpeed * (0.6 + Math.random() * 0.8));
        timer = window.setTimeout(step, jitter) as unknown as number;
      } else {
        setIsTyping(false);
        const elapsed = performance.now() - started;
        const waitMore = Math.max(0, minDuration - elapsed);
        timer = window.setTimeout(finish, waitMore) as unknown as number;
      }
    };

    timer = window.setTimeout(step, 200) as unknown as number;
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, avgSpeed, text, reduce, soundOn]);

  function finish() {
    if (oncePerSession) sessionStorage.setItem("seenSplash", "1");
    setVisible(false);
    onDone();
  }

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] grid place-items-center bg-gradient-to-br from-amber-50 via-white to-amber-100 dark:from-zinc-900 dark:via-zinc-950 dark:to-black"
      role="status"
      aria-live="polite"
    >
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between px-6">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
              {typed}
            </span>
            <span
              className={`ml-0.5 inline-block h-7 w-[2px] align-middle bg-amber-600 dark:bg-amber-400 ${
                isTyping ? "animate-pulse" : ""
              }`}
              aria-hidden="true"
            />
          </h1>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Preparing experience…
          </p>
        </div>

        <div className="ml-6 flex items-center gap-2">
          <button
            onClick={() => setSoundOn((s) => !s)}
            className="rounded-full border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-pressed={soundOn}
            aria-label={soundOn ? "Disable typing sound" : "Enable typing sound"}
            title={soundOn ? "Sound on" : "Sound off"}
          >
            {soundOn ? "🔊 Sound" : "🔈 Sound"}
          </button>

          <button
            onClick={finish}
            className="rounded-full bg-amber-500 px-3 py-1 text-sm font-medium text-white hover:bg-amber-600 focus-visible:ring-2 focus-visible:ring-amber-500"
            title="Skip"
          >
            Skip
          </button>
        </div>
      </div>
    </motion.div>
  );
}






