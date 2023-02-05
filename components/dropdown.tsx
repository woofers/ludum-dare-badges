'use client'

import React from 'react'
import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  Separator,
  Arrow,
  Label
} from '@radix-ui/react-dropdown-menu'
import { clsx } from 'cva'

export const DropdownSeparator: React.FC<
  React.ComponentProps<typeof Separator>
> = ({ className, ...rest }) => (
  <Separator {...rest} className={clsx('h-px bg-zinc-200 my-1', className)} />
)

export const DropdownItem: React.FC<React.ComponentProps<typeof Item>> = ({
  className,
  ...rest
}) => (
  <Item
    {...rest}
    className={clsx(
      'flex gap-x-1.5 px-4 py-2 text-stone-700 cursor-pointer data-[highlighted]:outline-0 data-[highlighted]:bg-stone-200/75 border-transparent focus:outline-none',
      className
    )}
  />
)

type RootProps = React.ComponentProps<typeof Root>

export const Dropdown: React.FC<
  Pick<RootProps, 'open' | 'onOpenChange'> & {
    trigger: React.ReactNode
    children: React.ReactNode
    className?: string
  }
> = ({ open, onOpenChange, className, trigger, children, ...rest }) => {
  return (
    <Root open={open} onOpenChange={onOpenChange}>
      <Trigger asChild>
        <button type="button" className="inline-flex">
          {trigger}
        </button>
      </Trigger>
      <Portal>
        <Content
          loop
          sideOffset={5}
          align="end"
          arrowPadding={12}
          className={clsx(
            'pt-4 pb-2 bg-zinc-100 rounded-xl w-28 drop-shadow',
            className
          )}
        >
          {children}
          <Arrow className="fill-zinc-100" width={15} height={7.5} />
        </Content>
      </Portal>
    </Root>
  )
}
