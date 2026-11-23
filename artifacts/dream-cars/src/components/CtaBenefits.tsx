import { Check } from "lucide-react";

const benefits = ["Бесплатная консультация", "Предварительный расчёт", "Персональный план работ"];

export function CtaBenefits({ className = "" }: { className?: string }) {
  return (
    <ul className={`${className} flex flex-col items-start gap-3 text-sm font-medium text-white/80 md:text-xs md:text-white/65`}>
      {benefits.map((benefit) => (
        <li key={benefit} className="flex items-center gap-3 md:block md:border-l md:border-[#a875ff] md:pl-3">
          <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8b5cf6]/30 text-white ring-1 ring-[#a875ff]/50 md:hidden">
            <Check className="h-4 w-4" strokeWidth={2.5} />
          </span>
          {benefit}
        </li>
      ))}
    </ul>
  );
}
