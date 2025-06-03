import { Badge as ChakraBadge, BadgeProps } from "@chakra-ui/react"
import React from "react"

export interface BadgeExtendedProps extends BadgeProps {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeExtendedProps>((props, ref) => {
  return <ChakraBadge ref={ref} {...props} />
})

Badge.displayName = "Badge"

export { Badge }