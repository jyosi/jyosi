import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0057B8]/50 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#0057B8] to-[#0057B8] hover:from-[#0057B8] hover:to-[#00A7C4] text-white shadow-md shadow-[#0057B8]/20 hover:shadow-lg hover:shadow-[#0057B8]/30 hover:-translate-y-0.5 active:translate-y-0",
        secondary: "bg-gradient-to-r from-[#00A7C4] to-[#00D1B2] text-white shadow-md shadow-[#00A7C4]/20 hover:shadow-lg hover:-translate-y-0.5",
        accent: "bg-gradient-to-r from-[#00D1B2] to-[#00A7C4] text-white shadow-md shadow-[#00D1B2]/20 hover:shadow-lg hover:-translate-y-0.5",
        outline: "border-2 border-[#0057B8]/20 text-[#0057B8] hover:bg-[#0057B8] hover:text-white hover:border-[#0057B8] hover:-translate-y-0.5",
        ghost: "text-[#0A2540] hover:bg-[#F6F8FB]",
        white: "bg-white text-[#0057B8] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7 py-3 text-[15px]",
        xl: "h-14 px-10 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
