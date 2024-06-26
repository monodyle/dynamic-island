import { Cover } from "./cover"
import { Equalizer } from "./eq"
import type { Song } from "./data"
import { DynamicIsland } from "#/dynamic-island"

type SongProps = {
  song: Song
}
export function Song({ song }: SongProps) {
  return (
    <DynamicIsland.Box hide="compact" className="grid items-center justify-center grid-cols-[64px_repeat(4,minmax(0,1fr))] gap-5">
      <Cover {...song} />
      <div className="col-span-3 overflow-hidden text-left">
        <p className="overflow-hidden text-lg font-medium leading-tight text-white truncate whitespace-nowrap">
          {song.title}
        </p>
        <p className="overflow-hidden text-lg leading-tight truncate text-neutral-400 whitespace-nowrap">{song.artist}</p>
      </div>
      <div className="grid place-items-end">
        <Equalizer />
      </div>
    </DynamicIsland.Box>
  )
}
