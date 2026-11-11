import { useToast } from "@/hooks/use-toast"
import { X } from "lucide-react"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[220] flex max-h-screen flex-col-reverse gap-3 p-4 sm:inset-x-auto sm:bottom-0 sm:right-0 sm:top-auto sm:w-full sm:max-w-[420px] sm:flex-col" aria-live="polite" aria-atomic="true">
      {toasts.filter((item) => item.open !== false).map(function ({ id, title, description, action, variant }) {
        return (
          <div key={id} role="status" className={`pointer-events-auto relative flex w-full items-center justify-between gap-4 border p-5 pr-10 shadow-lg animate-in fade-in slide-in-from-top-3 sm:slide-in-from-bottom-3 ${variant === "destructive" ? "border-red-500/40 bg-red-950 text-white" : "border-white/10 bg-[#111013] text-white"}`}>
            <div className="grid gap-1">
              {title && <div className="text-sm font-semibold">{title}</div>}
              {description && <div className="text-sm text-white/70">{description}</div>}
            </div>
            {action}
            <button type="button" onClick={() => dismiss(id)} aria-label="Закрыть уведомление" className="absolute right-3 top-3 p-1 text-white/50 transition-colors hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
