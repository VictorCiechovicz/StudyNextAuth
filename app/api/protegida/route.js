import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({
      message: 'sem autorização'
    })
  }
  return NextResponse.json({
    name: session.user.name,
    email: session.user.email,
    image: session.user.image
  })
}
