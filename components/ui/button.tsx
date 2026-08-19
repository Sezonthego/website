import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-low transition-all disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-cocoa text-brand-ivory hover:bg-brand-cocoa/90 cursor-pointer",
        destructive:
          "bg-destructive text-brand-ivory hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border border-brand-border bg-brand-ivory text-brand-cocoa hover:bg-brand-peach hover:text-brand-cocoa",
        secondary:
          "bg-brand-peach text-brand-cocoa hover:bg-[#ffe8cf]",
        ghost:
          "text-brand-cocoa hover:bg-brand-peach hover:text-brand-cocoa",
        link: "text-brand-orange underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-5 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
