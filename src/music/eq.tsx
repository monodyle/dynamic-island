import { motion } from "framer-motion"

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

function getLoopingRandomInt(max: number, length: number, base: number) {
  const randoms = []
  for (let i = 0; i < length - 1; i++) {
    randoms.push((getRandomInt(max) - max) / 2 + (base / 100) * max)
  }
  randoms.push(randoms[0])
  return randoms
}

type StickProps = {
  length?: number
}
function Stick({ length = 50 }: StickProps) {
  return (
    <motion.div
      className="h-6 flex-shrink-0 rounded-full bg-stone-50 w-0.5"
      animate={{ height: getLoopingRandomInt(28, 6, length) }}
      transition={{
        duration: 1.06,
        ease: "easeInOut",
        times: [0.2, 0.3, 0.5, 0.7, 1.1, 1.3, 1.7],
        repeat: Infinity,
      }}
    />
  )
}

export function Equalizer() {
  return (
    <div className="flex items-center gap-0.5">
      <Stick length={50} />
      <Stick length={60} />
      <Stick length={80} />
      <Stick length={90} />
      <Stick length={80} />
      <Stick length={60} />
    </div>
  )
}
