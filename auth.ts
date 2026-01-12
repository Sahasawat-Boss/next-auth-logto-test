// ✅ ทั้งหมดนี้ = Server เท่านั้น

import NextAuth from "next-auth";
import Logto from "next-auth/providers/logto";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Logto({
            issuer: process.env.AUTH_LOGTO_ISSUER,
            clientId: process.env.AUTH_LOGTO_ID,
            clientSecret: process.env.AUTH_LOGTO_SECRET,
            authorization: {
                params: { scope: "openid profile email offline_access" },
            },
        }),
    ],
});
