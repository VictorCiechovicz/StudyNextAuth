import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function Server() {
  const session = await getServerSession(authOptions)
  if (!session) redirect('signin?callbackUrl=/server')

  return (
    <div className="flex flex-col items-center">
      <p>server</p>
    </div>
  )
}
