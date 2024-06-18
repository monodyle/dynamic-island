import type { DynamicIslandState } from "./root"

type Presets = Record<
  DynamicIslandState,
  { width: number, ratio: number, borderRadius: number }
>
export const presets: Presets = {
  collapsed: {
    width: 240,
    ratio: 44 / 240,
    borderRadius: 22,
  },
  expanded: {
    width: 360,
    ratio: 210 / 360,
    borderRadius: 44,
  },
}
