import type { Song } from "./data"
import { DynamicIsland } from "#/dynamic-island"

function formatTime(time: number) {
  return `${Math.floor(time / 60)}:${Math.floor(time % 60).toString().padStart(2, "0")}`
}
const percentage = Math.random()

type TrackProps = {
  song: Song
}
export function Track({ song }: TrackProps) {
  return (
    <DynamicIsland.Box hide="compact" className="flex items-center gap-4 mt-4 mb-3">
      <div className="text-xs text-neutral-400">{formatTime(song.duration * percentage)}</div>
      <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-neutral-700">
        <div className="h-full w-[25.69%] bg-white" />
      </div>
      <div className="text-xs text-neutral-400">
        -
        {formatTime(song.duration * (1 - percentage))}
      </div>
    </DynamicIsland.Box>
  )
}
