import { useCallback, useEffect, useState } from 'react'

export default (asyncFunc, immediate = true) => {
  const [status, setStatus] = useState('idle')
  const [resource, setResource] = useState(null)
  const [error, setError] = useState()

  const load = useCallback(() => {
    setStatus('pending')

    return asyncFunc()
      .then((response) => {
        setResource(response)
        setStatus('success')
      })
      .catch((error) => {
        setError(error)
        setStatus('error')
      })
  }, [asyncFunc])

  useEffect(() => {
    if (immediate) load()
  }, [immediate, load])

  return { load, status, resource, error }
}
