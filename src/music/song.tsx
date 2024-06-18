import { Cover } from "./cover"
import { Equalizer } from "./eq"
import { DynamicIsland } from "#/dynamic-island"

export function Song() {
  return (
    <DynamicIsland.Box hide="collapsed" className="grid items-center justify-center grid-cols-[64px_repeat(4,minmax(0,1fr))] gap-3">
      <Cover />
      <div className="col-span-3 overflow-hidden text-left">
        <p className="overflow-hidden font-medium text-white truncate whitespace-nowrap">
          New Jeans
        </p>
        <p className="overflow-hidden truncate text-neutral-400 whitespace-nowrap">NewJeans</p>
      </div>
      <div className="grid place-items-end">
        <Equalizer />
      </div>
    </DynamicIsland.Box>
  )
}
