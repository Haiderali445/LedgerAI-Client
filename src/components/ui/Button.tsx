import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost' | 'brand';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    brand: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30 focus:ring-emerald-500',
    primary: 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/60 focus:ring-slate-400',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/40 focus:ring-slate-500',
    outline: 'border border-slate-700 hover:border-slate-500 text-slate-300 hover:bg-slate-800/40 focus:ring-slate-400',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white focus:ring-rose-500',
    ghost: 'text-slate-400 hover:text-white hover:bg-slate-800/60 focus:ring-slate-500',
  };

  const sizes = {
    sm: 'text-xs px-2.5 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2.5 font-semibold',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin h-4 w-4 mr-1.5 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
      )}
      {children}
    </button>
  );
};
