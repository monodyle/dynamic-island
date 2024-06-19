import React, { createContext, useCallback, useMemo, useState } from "react"

export type DynamicIslandPresentation = "compact" | "expanded"

type DynamicIslandContextValue = {
  state: DynamicIslandPresentation
  setState: React.Dispatch<React.SetStateAction<DynamicIslandPresentation>>
  toggleState: () => void
}
export const DynamicIslandContext = createContext<DynamicIslandContextValue>({
  state: "compact",
  setState: () => void 0,
  toggleState: () => void 0,
})

export function Root({ children }: React.PropsWithChildren) {
  const [state, setState] = useState<DynamicIslandContextValue["state"]>("compact")
  const toggleState = useCallback(() => setState(prev => prev === "compact" ? "expanded" : "compact"), [])

  const value = useMemo(() => ({ state, setState, toggleState }), [state, toggleState])
  return (
    <DynamicIslandContext.Provider value={value}>
      {children}
    </DynamicIslandContext.Provider>
  )
}
