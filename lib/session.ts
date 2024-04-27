import { User, getServerSession } from 'next-auth'

export const session = async ({ session, token }: any) => {
  session.user = token
  return session
}

export const getUserSession = async () => {
  const authUserSession = await getServerSession({
    callbacks: {
      session: session,
    }
  })
  if (authUserSession) {
    return authUserSession?.user
  }
}