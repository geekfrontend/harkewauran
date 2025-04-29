import NextAuth from "next-auth";

export const config = {
  providers: [],
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
