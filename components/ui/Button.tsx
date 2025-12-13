'use client';

import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}


const Button: React.FC<ButtonProps> = ({
  variant = 'secondary',
  size = 'md',
  children,
  className = '',
  ...rest
}) => {
  const cls = [
    styles.base,
    variant === 'primary' ? styles.primary : styles.secondary,
    size === 'sm' ? styles.sm : styles.md,
    className
  ].join(' ');

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
};


export default Button;
