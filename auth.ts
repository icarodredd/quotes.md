import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          scope: "openid email profile https://www.googleapis.com/auth/drive",
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return { ...session, token: token };
    },
    async jwt({ token, user, profile }) {
      return token;
    },
  },
});
