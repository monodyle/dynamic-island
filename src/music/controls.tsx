import { DynamicIsland } from "#/dynamic-island"
import { Icon } from "#/com/icon"

export function Controls() {
  return (
    <DynamicIsland.Box hide="compact" className="grid items-center justify-center grid-cols-5 gap-3">
      <div />
      <div className="flex">
        <Icon name="skip" className="w-12 h-12 m-auto rotate-180" />
      </div>
      <div className="flex">
        <Icon name="play" className="w-12 h-12 m-auto" />
      </div>
      <div className="flex">
        <Icon name="skip" className="w-12 h-12 m-auto" />
      </div>
    </DynamicIsland.Box>
  )
}
