"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "inline-flex items-center justify-center rounded-full overflow-hidden",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-24 w-24",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: React.ReactNode
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = "", size, fallback, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false)

    return (
      <div
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
      >
        {src && !hasError ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground">
            {fallback || alt.charAt(0).toUpperCase() || "U"}
          </div>
        )}
      </div>
    )
  }
)
Avatar.displayName = "Avatar"

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  max?: number
  spacing?: "tight" | "medium" | "loose"
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, max, spacing = "medium", className, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children)
    const spacingClasses = {
      tight: "-ml-1",
      medium: "-ml-2",
      loose: "-ml-3",
    }
    
    return (
      <div
        ref={ref}
        className={cn("flex flex-row", className)}
        {...props}
      >
        {max && childrenArray.length > max
          ? childrenArray.slice(0, max).map((child, index) => (
              <div key={index} className={index !== 0 ? spacingClasses[spacing] : ""}>
                {child}
              </div>
            )).concat(
              <div key="more" className={spacingClasses[spacing]}>
                <Avatar fallback={`+${childrenArray.length - max}`} />
              </div>
            )
          : childrenArray.map((child, index) => (
              <div key={index} className={index !== 0 ? spacingClasses[spacing] : ""}>
                {child}
              </div>
            ))}
      </div>
    )
  }
)
AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarGroup }
