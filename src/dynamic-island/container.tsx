import { AnimatePresence, motion, useWillChange } from "framer-motion"
import React, { useContext } from "react"
import { physics } from "./physics"
import { DynamicIslandContext } from "./root"
import { presets } from "./presets"

export function Container({ children }: React.PropsWithChildren) {
  const { state, toggleState } = useContext(DynamicIslandContext)

  const willChange = useWillChange()
  const bounding = {
    width: presets[state].width,
    height: presets[state].ratio * presets[state].width,
  }

  return (
    <motion.button
      className="items-center justify-center w-0 h-0 mx-auto text-center text-white transition duration-300 ease-in-out bg-black hover:shadow-lg"
      animate={{
        ...bounding,
        borderRadius: presets[state].radius,
        transition: { type: "spring", ...physics },
      }}
      style={{ willChange }}
      onClick={toggleState}
    >
      <AnimatePresence>
        {children}
      </AnimatePresence>
    </motion.button>
  )
}
