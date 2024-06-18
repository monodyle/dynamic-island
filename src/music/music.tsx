import { DynamicIsland } from "../dynamic-island"
import { Controls } from "./controls"
import { MiniCover } from "./cover"
import { Equalizer } from "./eq"
import { Song } from "./song"
import { Track } from "./track"

export function MusicDynamicIsland() {
  return (
    <DynamicIsland.Root>
      <DynamicIsland.Container>
        <DynamicIsland.CollapsedContent className="flex items-center justify-between px-3" key="collapsed">
          <MiniCover />
          <Equalizer />
        </DynamicIsland.CollapsedContent>
        <DynamicIsland.ExpandedContent className="w-full h-full p-6" key="expanded">
          <Song />
          <Track />
          <Controls />
        </DynamicIsland.ExpandedContent>
      </DynamicIsland.Container>
    </DynamicIsland.Root>
  )
}
