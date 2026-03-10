"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { whatsappMsg } from "@/libs";
import { useWhatsapp } from "@/hooks/useWhatsapp";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "hero" | "navbar" | "brand";
  className?: string;
  onClick?: () => void;
  showIcon?: boolean;
  path?: string;
  whatsapp?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  showIcon = true,
  path,
  whatsapp,
}: ButtonProps) {
  const router = useRouter();

  const { openWhatsApp } = useWhatsapp();

  const handleClick = () => {
    if (path) {
      router.push(path);
    }
    if (onClick) {
      onClick();
    }
    if (whatsapp) {
      openWhatsApp(whatsappMsg.client);
    }
  };
  const baseClasses =
    "inline-flex items-center font-medium text-[.95rem] cursor-pointer border-none transition-all duration-300 rounded-[50px] p-1.5 pl-6";

  const variantClasses =
    variant === "hero"
      ? "text-white bg-secondary hover:bg-[#2a1921] hover:text-white group"
      : variant === "navbar"
        ? "text-text-main bg-white hover:bg-[#2a1921] hover:text-white group"
        : variant === "brand"
          ? "text-white bg-[var(--brand-dark)] hover:bg-white hover:text-[#3e2632] group"
          : variant === "primary"
            ? "bg-primary text-white hover:bg-opacity-90"
            : variant === "secondary"
              ? "bg-dark text-white"
              : "border-2 border-primary text-primary hover:bg-primary hover:text-white";

  const iconClasses =
    variant === "hero"
      ? "bg-white text-primary w-9 h-9 flex items-center justify-center ml-4 font-[1.2rem] rounded-[50%] group-hover:bg-white group-hover:text-primary"
      : variant === "navbar"
        ? "bg-primary text-white w-9 h-9 flex items-center justify-center ml-4 font-[1.2rem] rounded-[50%] group-hover:bg-white group-hover:text-primary"
        : variant === "brand"
          ? "bg-[var(--brand-peach)] text-[var(--brand-dark)] w-9 h-9 flex items-center justify-center ml-4 font-[1.2rem] rounded-[50%]"
          : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={handleClick}
    >
      <span>{children}</span>
      {showIcon &&
        (variant === "hero" || variant === "navbar" || variant === "brand") && (
          <span className={iconClasses}>
            <ArrowUpRight size={22} />
          </span>
        )}
    </button>
  );
}
