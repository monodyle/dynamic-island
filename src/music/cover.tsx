import type { Song } from "./data"
import { DynamicIsland } from "#/dynamic-island"

export function MiniCover({ cover, title }: Song) {
  return (
    <DynamicIsland.Box hide="expanded">
      <div className="overflow-hidden rounded-lg w-7 h-7">
        <img src={cover} alt={title} className="block w-full h-full" />
      </div>
    </DynamicIsland.Box>
  )
}

export function Cover({ cover, title }: Song) {
  return (
    <DynamicIsland.Box hide="collapsed">
      <div className="w-16 h-16 overflow-hidden rounded-2xl">
        <img src={cover} alt={title} className="block w-full h-full" />
      </div>
    </DynamicIsland.Box>
  )
}
