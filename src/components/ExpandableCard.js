"use client"

import * as React from "react"
import ReactDOM from "react-dom"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "../lib/utils"
import PixelCard from "./PixelCard"

export function ExpandableCard({
  title,
  src,
  description,
  children,
  className,
  classNameExpanded,
  ...props
}) {
  const [active, setActive] = React.useState(false)
  const cardRef = React.useRef(null)
  const id = React.useId()

  const layoutTransition = { type: "spring", stiffness: 220, damping: 28 };

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setActive(false)
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    window.addEventListener("keydown", onKeyDown)
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [active])

  return (
    <>
      {typeof document !== 'undefined' && active && ReactDOM.createPortal(
        <>
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] h-full w-full bg-slate-950/80 backdrop-blur-md"
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {active && (
              <div className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto p-4 md:p-12">
                <motion.div
                  layoutId={`card-${title}-${id}`}
                  transition={layoutTransition}
                  ref={cardRef}
                  className={cn(
                    "relative flex h-auto max-h-[85vh] w-full max-w-[650px] flex-col overflow-y-auto bg-slate-950 shadow-2xl border border-white/10 rounded-3xl",
                    classNameExpanded
                  )}
                  {...props}
                >
                  <div className="relative h-64 w-full flex-shrink-0">
                    <img
                      src={src}
                      alt={title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  </div>
                  
                  <div className="relative flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-xs font-pixel text-slate-400 mb-1 uppercase">
                          {description}
                        </p>
                        <h3 className="text-xl font-black text-white md:text-2xl uppercase">
                          {title}
                        </h3>
                      </div>
                      <button
                        aria-label="Close card"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                        onClick={() => setActive(false)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="text-sm text-slate-300 leading-relaxed font-sans">
                      {children}
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </>,
        document.body
      )}

      <PixelCard
        variant="pink"
        colors="#A78BFA,#C084FC,#F472B6,#60A5FA"
        className="rounded-3xl h-full w-full"
      >
        <motion.div
          layoutId={`card-${title}-${id}`}
          transition={layoutTransition}
          onClick={() => setActive(true)}
          className={cn(
            "flex cursor-pointer flex-col items-center justify-between rounded-3xl border border-white/20 bg-white/[0.03] p-4 shadow-sm hover:border-white/30 transition-all duration-300 h-full",
            className
          )}
        >
          <div className="flex flex-col gap-4 w-full">
            <div className="h-48 w-full rounded-2xl overflow-hidden">
              <img
                src={src}
                alt={title}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex items-center justify-between px-1">
              <div className="flex flex-col">
                <p className="text-[9px] font-pixel text-slate-400 md:text-left mb-1 uppercase">
                  {description}
                </p>
                <h3 className="font-bold text-white md:text-left text-sm uppercase">
                  {title}
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </PixelCard>
    </>
  )
}
