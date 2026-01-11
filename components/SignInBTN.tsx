"use client";

import { signIn } from "@/auth";

export default function SignIn() {
    return (
        <button onClick={() => signIn("logto")}>
            Sign In with Logto
        </button>
    );
}
