import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const secret = process.env.SECRET;

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          access_type: "offline",
          prompt: "consent",
          scope:
            "email profile openid https://www.googleapis.com/auth/drive.readonly",
        },
      },
    }),
  ],
  secret: secret,
  callbacks: {
    jwt: ({ token, account }) => {
      if (account?.access_token) {
        token.access_token = account.access_token;
      }
      return token;
    },
    session: async ({ session, user, token }) => {
      (session as any).token = token;
      return session;
    },
  },
});
