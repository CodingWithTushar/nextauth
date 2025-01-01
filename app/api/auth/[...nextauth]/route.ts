import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

//This Will work only on http://localhost:3000/api/auth/signin because nextauth support that only

const handler = NextAuth({
    
  providers: [
    CredentialsProvider({
      name: "Email and Password",

      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Tushar01@gamil.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Tushar$7531",
        },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: "Tushar",
          email: "jsmith@example.com",
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),

    GoogleProvider({
        clientId: "Tushar",
        clientSecret: "ewcnwdunxcuiowd"
      })
  ],
  secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };
