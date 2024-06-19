import type { SVGProps } from "react"

type IconName = "play" | "skip"

export function Icon({
  name,
  filled,
  className,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: IconName
  filled?: boolean
}) {
  return (
    <svg width={16} height={16} className={["pointer-events-none", className].join(" ")} {...props}>
      <use href={`/icons.svg#${name}`} />
    </svg>
  )
}
