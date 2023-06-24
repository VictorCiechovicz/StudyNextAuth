'use client'
import { useSession } from 'next-auth/react'

export function Perfil() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col items-center">
      <img src={session?.user?.image} alt="image" className="w-40 h-40" />
      <h1>{session?.user?.name}</h1>
      <p>{session?.user?.email}</p>
    </div>
  )
}
