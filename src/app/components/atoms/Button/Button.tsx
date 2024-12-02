// components/common/Button.tsx
import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary';
}

export function Button({ href, variant = 'primary', children, ...props }: ButtonProps) {
  const baseClasses = "rounded-full px-6 py-3 transition-colors";
  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "border border-gray-200 hover:border-gray-400"
  };

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
}