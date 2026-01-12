"use client";

import { signIn } from "next-auth/react"; // ✅ ตัวนี้เท่านั้น

export default function SignInBTN() {
    return (
        <button onClick={() => signIn("logto")}>
            Sign In with Logto
        </button>
    );
}
