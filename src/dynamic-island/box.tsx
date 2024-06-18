import type { HTMLMotionProps } from "framer-motion"
import { motion, useWillChange } from "framer-motion"
import { useContext } from "react"
import { DynamicIslandContext, type DynamicIslandState } from "./root"
import { physics } from "./physics"

export function Box({ size, hide, ...props }: HTMLMotionProps<"div"> & {
  hide: DynamicIslandState
  size?: DynamicIslandState
}) {
  const willChange = useWillChange()
  const { state } = useContext(DynamicIslandContext)

  const isInitState = (size ?? state) === hide

  return (
    <motion.div
      initial={{ opacity: isInitState ? 1 : 0, scale: isInitState ? 1 : 0.9 }}
      animate={{
        opacity: isInitState ? 0 : 1,
        scale: isInitState ? 0.9 : 1,
        transition: { type: "spring", ...physics },
      }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 0 }}
      style={{ willChange }}
      {...props}
    />
  )
}
