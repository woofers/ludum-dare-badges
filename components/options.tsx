'use client'

import { Form, Formik, useField, useFormikContext } from 'formik'
import { useState, useEffect } from 'react'
import Input from './input'
import { Dropdown, DropdownItem } from './dropdown'
import Widget from '@ludum-dare-badges/react'

type Values = {
  host: string
  id: string
  sep: string
  name: string
  badge: string
  type: string
}

const dropdownClass = ['px-3', 'py-2.5', 'rounded-lg',
    'bg-zinc-800',
    'border-solid',
    'border-stone-700',
    'border', 'w-16'].join(" ")

const TypeDropdown: React.FC<{ name: string }> = ({ name }) => {
  const [field, _, helpers] = useField<string>(name)
  const { value } = field
  const { setValue } = helpers
  return (
    <Dropdown trigger={<span className={dropdownClass}>{value}</span>}>
      <DropdownItem
        onSelect={() => setValue('svg')}
      >
        SVG
      </DropdownItem>
      <DropdownItem
        onSelect={() => setValue('png')}
      >
        PNG
      </DropdownItem>
    </Dropdown>
  )
}

const Image: React.FC<{ url: string }> = ({ url }) => {
  const { values } = useFormikContext<Values>();
  const name = values.name
  const id = values.id
  const type = values.type
  const game = id && name ? `${id}/${name}`: ''
  return (
    <div className="mt-8 flex justify-center">
      {url ? <Widget host={url} game={game} type={type} /> : null}
    </div>
  )
}

const Options: React.FC<{}> = () => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
      setMounted(true)
    }, [])
    const url = () => {
      const defaultValue = 'badges.jaxs.onl'
      if (!mounted || typeof window === 'undefined') return defaultValue
      if (!window.location.host) return defaultValue
      return `${window.location.protocol}//${window.location.host}`
    }
    const shortUrl = () => {
      return url()
        .replace('https://', '')
        .replace('http://', '')
        .substring(0, 18)
    }
    const onSubmit = async (values: Values) => {
    }
    return (
        <>
          <Formik initialValues={{ host: '', id: '', sep: '', name: '', badge: '', type: 'svg' }} onSubmit={onSubmit}>
            <div>
              <Form>
                  <Input name="host" width="200px" disabled theme="ghost" label={`${shortUrl()}/`} />
                  <Input name="id" width="145px" label="Ludum Dare #" placeholder="44" type="number" min={0} max={200} />
                  <Input name="sep" width="35px" disabled theme="ghost" label="/" />
                  <Input name="name" width="205px" label="Game" placeholder="alien-e-x-p-a-n-s-i-o-n" />
                  <Input name="badge" width="90px" disabled theme="ghost" label="/badge." />
                  <TypeDropdown name="type" />
              </Form>
              <Image url={url()} />
            </div>
          </Formik>
        </>
    )
}

export default Options