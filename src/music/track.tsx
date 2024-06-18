import { DynamicIsland } from "#/dynamic-island"

export function Track() {
  return (
    <DynamicIsland.Box hide="collapsed" className="flex items-center gap-4 mt-6 mb-4">
      <div className="text-sm text-neutral-400">0:28</div>
      <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-neutral-700">
        <div className="h-full w-[25.69%] bg-white" />
      </div>
      <div className="text-sm text-neutral-400">-1:21</div>
    </DynamicIsland.Box>
  )
}
