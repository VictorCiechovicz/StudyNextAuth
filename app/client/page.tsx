'use client'

import { useSession } from 'next-auth/react'

export default function Client() {
  const { data: session } = useSession({
    required:true
  })

  return (
    <div className="flex flex-col items-center">
      <p> Modo de deixar um Client Component protegido</p>
    </div>
  )
}
