import { DynamicIsland } from "#/dynamic-island"
import { Icon } from "#/icon"

export function Controls() {
  return (
    <DynamicIsland.Box hide="collapsed" className="grid items-center justify-center grid-cols-5 gap-3">
      <div className="h-11" />
      <div className="flex">
        <Icon name="skip" className="m-auto rotate-180 w-7 h-7" />
      </div>
      <div className="flex">
        <Icon name="play" className="m-auto w-7 h-7" />
      </div>
      <div className="flex">
        <Icon name="skip" className="m-auto w-7 h-7" />
      </div>
    </DynamicIsland.Box>
  )
}
