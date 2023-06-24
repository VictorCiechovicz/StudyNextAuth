import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { Button } from '@/app/components/Button'

export default async function SignIn() {
  const session = await getServerSession(authOptions)
  if (session) redirect('/')

  return (
    <div className="flex flex-col items-center">
      <p className='text-[30px]'>SignIn</p>
      <Button />
    </div>
  )
}
