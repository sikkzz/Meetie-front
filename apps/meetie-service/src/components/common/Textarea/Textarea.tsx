import React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "rounded-lg px-4 py-3 border border-[#c4c4c4] text-[#434343] w-[343px] h-[175px] placeholder:text-blue-300 outline-none text-regular-14",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

export default Textarea;
