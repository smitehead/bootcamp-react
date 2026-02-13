import React from "react";

const sizeMap = {
  sm: "h-5 w-5",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

function clsx(...args) {
  return args.filter(Boolean).join(" ");
}

export default function LoadingComponent({
  variant = "spinner",
  text,
  size = "md",
  fullscreen = false,
  overlay = false,
  progress,
  className,
}) {
  const sizeClass = sizeMap[size] || sizeMap.md;

  const Wrapper = ({ children }) => (
    <div
      className={clsx(
        "relative flex items-center justify-center",
        fullscreen && "fixed inset-0 z-[60] p-6",
        overlay && "bg-black/40 backdrop-blur-sm",
        !fullscreen && !overlay && "py-6",
        className,
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        {children}
        {text && (
          <div className="text-sm text-neutral-600 dark:text-neutral-300">
            {text}
          </div>
        )}
      </div>
    </div>
  );

  if (variant === "dots") {
    return (
      <Wrapper>
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={clsx(
                "inline-block rounded-full bg-indigo-500",
                size === "sm" && "h-2 w-2",
                size === "md" && "h-2.5 w-2.5",
                size === "lg" && "h-3.5 w-3.5",
              )}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </div>
      </Wrapper>
    );
  }

  if (variant === "bar") {
    const isDeterminate = typeof progress === "number" && progress >= 0;
    const pct = isDeterminate ? Math.max(0, Math.min(100, progress)) : 30;

    return (
      <Wrapper>
        <div className="w-64 max-w-[80vw]">
          <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
            {isDeterminate ? (
              <div
                className="h-full rounded-full bg-indigo-500 transition-[width] duration-300 ease-out"
                style={{ width: `${pct}%` }}
              />
            ) : (
              <motion.div
                className="h-full w-1/3 rounded-full bg-indigo-500"
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>
          {isDeterminate && (
            <div className="mt-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              {pct}%
            </div>
          )}
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div
        className={clsx(
          "rounded-full border-2 border-neutral-300 border-t-indigo-500 animate-spin",
          sizeClass,
        )}
      />
    </Wrapper>
  );
}
