'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

export function Button() {
  const { data: session } = useSession()

  return (
    <div >
      <button
        onClick={() => {
          session ? signOut() : signIn('google')
        }}
        type="button"
        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800 mt-10"
      >
        {session ? 'SignOut' : 'SignIn With Google'}
      </button>
  
    </div>
  )
}
