import type { DynamicIslandPresentation } from "./root"

type Presets = Record<
  DynamicIslandPresentation,
  { width: number, ratio: number, radius: number }
>
export const presets: Presets = {
  compact: {
    width: 240,
    ratio: 44 / 240,
    radius: 22,
  },
  expanded: {
    width: 360,
    ratio: 200 / 360,
    radius: 44,
  },
}
