import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from './api/auth/[...nextauth]/route'

import { Button } from './components/Button'
import { Perfil } from './components/Perfil'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('signin?callbackUrl=/server')

  return (
    <div className="flex flex-col w-full max-w-full items-center justify-center">
      <ul className="flex items-center justify-between gap-10 text-xl">
        <Link href="/server">Server</Link>
        <Link href="/client">Client</Link>

        <Button />
      </ul>
      <Perfil />
    </div>
  )
}
