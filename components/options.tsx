'use client'

import { Form, Formik } from 'formik'
import { useState, useEffect } from 'react'
import Input from './input'
import Widget from '@ludum-dare-badges/react'

const Options: React.FC<{}> = () => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
      setMounted(true)
    }, [])
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [type, setType] = useState('svg')
    const game = id && name ? `${id}/${name}`: ''
    const url = () => {
      if (!mounted || typeof window === 'undefined') return ''
      if (!window.location.host) return ''
      return `${window.location.protocol}//${window.location.host}`
    }
    const shortUrl = () => {
      return url()
        .replace('https://', '')
        .replace('http://', '')
        .substring(0, 18)
    }
    const onSubmit = async () => {

    }
    return (
        <>
          <Formik initialValues={{}} onSubmit={onSubmit}>
            <Form>
                <Input width="200px" disabled theme="ghost" label={`${shortUrl()}/`} />
                <Input width="145px" label="Ludum Dare #" placeholder="44" type="number" min={0} max={200} />
                <Input width="35px" disabled theme="ghost" label="/" />
                <Input width="205px" label="Game" placeholder="alien-e-x-p-a-n-s-i-o-n" />
                <Input width="90px" disabled theme="ghost" label="/badge." />
            </Form>
          </Formik>
          <div className="mt-8">{url() ? <Widget game={game} type={type} /> : null}</div>
        </>
    )
}

export default Options