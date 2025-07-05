import { Component } from 'react';

import { cn } from '@/utils/cn';

class Button extends Component<React.ComponentProps<'button'>> {
  render() {
    const { type, children, className, ...props } = this.props;
    return (
      <button
        type={type || 'button'}
        className={cn(
          'h-9 px-4 py-2 text-center',
          'bg-muted-hero text-primary cursor-pointer rounded-xl shadow-xs',
          'hover:bg-muted-hero/90 transition active:scale-95',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
