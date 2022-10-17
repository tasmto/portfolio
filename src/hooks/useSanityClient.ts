import { useMemo } from 'react'
import { useClient } from 'sanity'

export function useSanityClient() {
  const client = useClient()
  return useMemo(
    () => client.withConfig({ apiVersion: '2022-10-10' }),
    [client]
  )
}

// //use it in a component instead of useClient
// export function MyComponent {
//   const client = useSanityClient()
//   return <div>JSX</div>
// }
