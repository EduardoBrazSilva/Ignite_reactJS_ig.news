import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export default NextAuth({
    providers: [
        GithubProvider({
            authorization: { params: { scope: "openid read:user" } },
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
})