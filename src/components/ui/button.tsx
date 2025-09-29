import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 active:scale-95 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default: "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg active:bg-red-800 shadow-md",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 hover:shadow-lg active:bg-red-800 shadow-md focus-visible:ring-red-500",
        outline:
          "border-2 border-gray-300 bg-white text-gray-700 hover:border-red-500 hover:text-red-600 hover:bg-red-50 active:bg-red-100 shadow-sm",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:shadow-md active:bg-gray-300 shadow-sm",
        ghost:
          "text-gray-700 hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200",
        link: "text-red-600 underline-offset-4 hover:underline hover:text-red-700 active:text-red-800",
        success: "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg active:bg-green-800 shadow-md focus-visible:ring-green-500",
        warning: "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg active:bg-orange-700 shadow-md focus-visible:ring-orange-500",
        dark: "bg-black text-white hover:bg-gray-800 hover:shadow-lg active:bg-gray-900 shadow-md focus-visible:ring-gray-500",
      },
      size: {
        default: "h-10 px-5 py-2.5 text-sm",
        sm: "h-8 px-3 py-1.5 text-xs rounded-md",
        lg: "h-12 px-8 py-3 text-base rounded-xl",
        xl: "h-14 px-10 py-4 text-lg rounded-xl",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
