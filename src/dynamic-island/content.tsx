import React, { useContext } from "react"
import { DynamicIslandContext } from "./root"
import { Box } from "./box"

type DynamicIslandContentProps = React.PropsWithChildren & Pick<React.HTMLAttributes<HTMLDivElement>, "className">

export function CompactContent({ children, ...props }: DynamicIslandContentProps) {
  const { state } = useContext(DynamicIslandContext)

  if (state !== "compact") {
    return null
  }
  return <Box hide="expanded" size={state} {...props}>{children}</Box>
}

export function ExpandedContent({ children, ...props }: DynamicIslandContentProps) {
  const { state } = useContext(DynamicIslandContext)

  if (state !== "expanded") {
    return null
  }
  return <Box hide="compact" size={state} {...props}>{children}</Box>
}
