import { DynamicIsland } from "#/dynamic-island"

export function MiniCover() {
  return (
    <DynamicIsland.Box hide="expanded">
      <div className="overflow-hidden rounded-lg w-7 h-7">
        <img src="/getup.jpg" alt="NewJeans 2nd EP 'Get Up'" className="block w-full h-full" />
      </div>
    </DynamicIsland.Box>
  )
}

export function Cover() {
  return (
    <DynamicIsland.Box hide="collapsed">
      <div className="w-16 h-16 overflow-hidden rounded-2xl">
        <img src="/getup.jpg" alt="NewJeans 2nd EP 'Get Up'" className="block w-full h-full" />
      </div>
    </DynamicIsland.Box>
  )
}
