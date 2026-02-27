"use client";

import { motion } from "motion/react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-md font-medium transition-colors";

  const variantClasses =
    variant === "primary"
      ? "bg-primary text-white hover:bg-opacity-90"
      : "border-2 border-primary text-primary hover:bg-primary hover:text-white";

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
