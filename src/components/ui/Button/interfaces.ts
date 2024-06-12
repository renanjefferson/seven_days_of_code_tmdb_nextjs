import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

export const button = tv({
  base: ["rounded-lg px-4 py-2 outline-none"],
  variants: {
    variant: {
      ghost: "rounded-md px-2",
    },
  },
  defaultVariants: {
    variant: "ghost",
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button>;
