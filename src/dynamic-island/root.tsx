import React, { createContext, useCallback, useMemo, useState } from "react"

export type DynamicIslandState = "collapsed" | "expanded"

type DynamicIslandContextValue = {
  state: DynamicIslandState
  setState: React.Dispatch<React.SetStateAction<DynamicIslandState>>
  toggleState: () => void
}
export const DynamicIslandContext = createContext<DynamicIslandContextValue>({
  state: "collapsed",
  setState: () => void 0,
  toggleState: () => void 0,
})

export function Root({ children }: React.PropsWithChildren) {
  const [state, setState] = useState<DynamicIslandContextValue["state"]>("collapsed")
  const toggleState = useCallback(() => setState(prev => prev === "collapsed" ? "expanded" : "collapsed"), [])

  const value = useMemo(() => ({ state, setState, toggleState }), [state, toggleState])
  return (
    <DynamicIslandContext.Provider value={value}>
      {children}
    </DynamicIslandContext.Provider>
  )
}
