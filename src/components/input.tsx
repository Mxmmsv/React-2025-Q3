import { Component } from 'react';

import { cn } from '@/utils/cn';

class Input extends Component<React.ComponentProps<'input'>> {
  render() {
    const { type, className, ...props } = this.props;
    return (
      <input
        type={type}
        className={cn(
          'text-primary placeholder:text-primary/30 border-muted-hero bg-transparent outline-none',
          'flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base shadow-xs transition md:text-sm',
          className
        )}
        {...props}
      />
    );
  }
}

export default Input;
