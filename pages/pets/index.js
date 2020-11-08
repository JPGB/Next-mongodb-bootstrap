import { useRouter } from 'next/router'
import useSWR from 'swr'

import Link from 'next/link'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }

  return data
}


export default function index() {

    const { query } = useRouter()

    const { data, error } = useSWR('/api/pets/pegartodos',fetcher)

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return (
        <div>
            { data.map( (val) => {
              return <div key={val._id}><Link href={`/pets/${val._id}`}><a> {val.nome} </a></Link></div>
            }) }
        </div>
    )
}
