import { useState, useEffect } from "react"

interface UseAPIProps<T> {
  data: T | null
  error: string | null
  loading: boolean
}

export function useAPI<T>(url?: string): UseAPIProps<T> {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(url)

        if (!response.ok) {
          switch (response.status) {
            case 400:
              setError(`${response.statusText}: Missing or invalid request parameters.`)
              break
            case 403:
              setError(`${response.statusText}: Access to this resource is restricted.`)
              break
            case 404:
              setError(`${response.statusText}: Requested data is not available.`)
              break
            default:
              setError(`${response.statusText}: Unexpected error occurred.`)
          }
          return
        }

        const json = await response.json()
        setData(json)
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError("An unknown error occurred!")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, error, loading }
}
