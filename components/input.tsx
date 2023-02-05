import { clsx, cva } from 'cva'
import { useField } from 'formik'
import React, { useId } from 'react'
import type { VariantProps } from 'cva'

const input = cva(['w-full', 'placeholder:opacity-0'], {
  variants: {
    size: {
      small: ['px-2.5', 'py-1', 'rounded-lg'],
      normal: ['px-3', 'py-2.5', 'rounded-lg']
    },
    theme: {
      primary: [
        'bg-zinc-100',
        'border-solid',
        'border-stone-200',
        'border',
        'transition-colors',
        'placeholder:transition-colors',
        'placeholder:text-zinc-400',
        'hover:placeholder:text-zinc-500'
      ],
      ghost: []
    }
  },
  defaultVariants: {
    size: 'normal',
    theme: 'primary'
  }
})

type InputVaraints = VariantProps<typeof input>

type DataProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

type InputProps = DataProps & InputVaraints & { 
  label?: React.ReactNode
  width?: string
  name: string
}

const Input: React.FC<InputProps> = ({
  id: initialId,
  name,
  className,
  type = 'text',
  size = 'normal',
  theme = 'primary',
  placeholder = '',
  width = "unset",
  label,
  ...rest
}) => {
  const generatedId = useId()
  const id = initialId || generatedId
  const [field] = useField(name)
  return (
    <div className="relative inline-block input-box mt-8" style={{ width }}>
      <input
        id={id}
        {...rest}
        {...field}
        type={type}
        className={clsx(input({ size, theme }), className)}
        placeholder={placeholder || " "}
      />
      {!!(label || placeholder) && (
        <div className="input-box-container" aria-hidden>
          <span className={clsx(placeholder ? 'input-box-label-placeholder' : 'input-box-label', 'absolute top-2.5 left-3 pointer-events-none opacity-50')}>{label}</span>
          {!!placeholder && <span className="input-box-placeholder absolute top-2.5 left-3 pointer-events-none opacity-50">{placeholder}</span>}
        </div>
      )} 
      {/*!!placeholder && <div className="input-box-placeholder absolute top-2.5 left-3 pointer-events-none" aria-hidden>{placeholder}</div>*/}
      <label className="sr-only" htmlFor={id}>{label}</label>
    </div>
  )
}

export default Input
