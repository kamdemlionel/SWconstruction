import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// Correct: Export GET and POST as functions
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };