import { clsx } from 'cva'

const Container: React.FC<{
  className?: string
  padding?: 'xy' | 'x' | 'y'
  children?: React.ReactNode
}> = ({ children, className, padding = 'xy', ...rest }) => (
  <div
    {...rest}
    className={clsx(
      'flex flex-col mx-auto w-full max-w-container [max-width:1440px]',
      (padding === 'xy' || padding === 'x') && 'px-4 sm:px-6 lg:px-8',
      (padding === 'xy' || padding === 'y') && 'py-2 sm:py-3 lg:py-4',
      className
    )}
  >
    {children}
  </div>
)

export default Container
