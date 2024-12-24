import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        {
          'bg-indigo-600 text-white hover:bg-indigo-700': variant === 'primary',
          'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50':
            variant === 'secondary',
          'px-3 py-1.5 text-sm': size === 'small',
          'px-4 py-2 text-base': size === 'medium',
          'px-6 py-3 text-lg': size === 'large',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};