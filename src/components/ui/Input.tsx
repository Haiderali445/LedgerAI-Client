import React from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ label, error, icon, className, ...props }) => {
  return (
    <div className="w-full space-y-1.5">
      {label && <label className="block text-xs font-medium text-slate-300">{label}</label>}
      <div className="relative rounded-lg shadow-sm">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
            {icon}
          </div>
        )}
        <input
          className={cn(
            'block w-full rounded-lg border border-slate-700/80 bg-slate-900/90 text-slate-100 placeholder-slate-500 text-sm py-2 px-3 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors',
            icon && 'pl-9',
            error && 'border-rose-500 focus:border-rose-500 focus:ring-rose-500',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-rose-400">{error}</p>}
    </div>
  );
};
