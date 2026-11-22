import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = false, ...props }) => {
  return (
    <div
      className={cn(
        'bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 rounded-xl p-5 shadow-sm',
        hover && 'hover:border-slate-700 hover:shadow-md transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
