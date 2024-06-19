import { DynamicIsland } from "../dynamic-island"
import { Controls } from "./controls"
import { MiniCover } from "./cover"
import { Equalizer } from "./eq"
import { Song } from "./song"
import { Track } from "./track"
import { songs } from "./data"

export function MusicDynamicIsland() {
  const song = songs[Math.floor(Math.random() * songs.length)]

  return (
    <DynamicIsland.Root>
      <DynamicIsland.Container>
        <DynamicIsland.CompactContent className="flex items-center justify-between px-3" key="compact">
          <MiniCover {...song} />
          <Equalizer />
        </DynamicIsland.CompactContent>
        <DynamicIsland.ExpandedContent className="w-full h-full p-6 px-5" key="expanded">
          <Song song={song} />
          <Track song={song} />
          <Controls />
        </DynamicIsland.ExpandedContent>
      </DynamicIsland.Container>
    </DynamicIsland.Root>
  )
}
