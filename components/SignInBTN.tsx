"use client";

import { signIn } from "next-auth/react"; 

export default function SignInBTN() {
    return (
        <button
            className="px-4 p-2 bg-red-300 rounded-2xl hover:scale-105 shadow-md"
            onClick={() => signIn("logto")}>
            Sign In with Logto
        </button>
    );
}
