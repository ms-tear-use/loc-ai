"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import {cn} from "../../lib/utils";

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>>(
    ({className, ...props}, ref) => (
        <SliderPrimitive.Root
            ref={ref}
            className={cn("relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50", className)}
            {...props}
        >
            <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-foreground-dark dark:bg-foreground dark:border dark:border-border-gray-dark">
                <SliderPrimitive.Range className="absolute h-full bg-primary " />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[disabled]:pointer-events-none" />
        </SliderPrimitive.Root>
    )
);
Slider.displayName = SliderPrimitive.Root.displayName;

export {Slider};