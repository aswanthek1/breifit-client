import { Post } from "@/lib/axios";
import { session } from "@/lib/session";
import NextAuth, { AuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

console.log(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, 'GOOGLE_APP_SECRET')

const signInAction = async(user:any) => {
    try {
        const {data} = await Post('/author/login/provider', {...user, provider:'google'})
        const cookieStore = cookies()
        cookieStore.set("token", data.accessToken, {maxAge:30, path:'/'})
        return data
    }catch(error) {
        return false
    }
}

let dbData: JWT;

export const authOptions: AuthOptions = {
    secret:process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            try {
                if (account?.provider === 'google') {
                    if(!user) return false
                    const result = await signInAction(user)
                    if(!result) return false
                    dbData = result
                    return result
                }
                return false;
            }
            catch (error) {
                return false
            }
        },
        session,
        async jwt({token, user, session}) {
            // console.log(user, 'user at jwt', token, session, 'sessionsession', dbData, 'dbdatadatadatadata')
            token = {...token, ...dbData}
            return token
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}
