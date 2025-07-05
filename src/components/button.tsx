import { Component } from 'react';

import { cn } from '@/utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

class Button extends Component<ButtonProps> {
  render() {
    const { children, className } = this.props;
    return (
      <button
        type="button"
        className={cn(
          'h-9 px-4 py-2 text-center',
          'bg-muted-hero text-primary cursor-pointer rounded-xl shadow-xs',
          'hover:bg-muted-hero/90 transition active:scale-95',
          className
        )}
      >
        {children}
      </button>
    );
  }
}

export default Button;
