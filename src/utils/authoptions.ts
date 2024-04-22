// import { NextAuthOptions, getServerSession } from "next-auth";

// import CredentialsProvider from "next-auth/providers/credentials";

// export const authOptions: NextAuthOptions = {
//  providers: [
//   CredentialsProvider({
//    name: "Credentials",
//    credentials: {
//     email: { label: "Email", type: "text" },
//     password: { label: "Password", type: "password" },
//    },
//    async authorize(credentials, req) {
//     const { email, password } = credentials as {
//      email: string;
//      password: string;
//     };

//     try {
//      // Call your custom login API
//      const response = await signIn({ email, password });

//      //  const getUserProfile = await getProfile()
//      // Assuming your API returns user data on successful login
//      const user = response;

//      // If user data is returned, return it as the user object
//      if (user) {
//       return user;
//      } else {
//       // If no user data is returned, return null to indicate authentication failed
//       return null;
//      }
//     } catch (error) {
//      // Return null if login fails due to error
//      return null;
//     }
//    },
//   }),
//  ],

//  pages: {
//   signIn: "/sign-in",
//   signOut: "/sign-in",
//   error: "/?message=Email or Password is incorrect.",
//  },

//  session: {
//   strategy: "jwt",
//   maxAge: 24 * 60 * 60,
//  },

//  callbacks: {
//   async jwt({ token, user }) {
//    if (user) {
//     return {
//      ...token,
//      ...user,
//     };
//    }
//    return token;
//   },
//   async session({ session, token, user }) {
//    session.user = {
//     ...token,
//     ...user,
//    };

//    return session;
//   },
//  },
// };

// export const getServerAuthSession = () => getServerSession(authOptions);
