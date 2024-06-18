import React, { useContext } from "react"
import { DynamicIslandContext } from "./root"
import { Box } from "./box"

type DynamicIslandContentProps = React.PropsWithChildren & Pick<React.HTMLAttributes<HTMLDivElement>, "className">

export function CollapsedContent({ children, ...props }: DynamicIslandContentProps) {
  const { state } = useContext(DynamicIslandContext)

  if (state !== "collapsed") {
    return null
  }
  return <Box hide="expanded" size={state} {...props}>{children}</Box>
}

export function ExpandedContent({ children, ...props }: DynamicIslandContentProps) {
  const { state } = useContext(DynamicIslandContext)

  if (state !== "expanded") {
    return null
  }
  return <Box hide="collapsed" size={state} {...props}>{children}</Box>
}
