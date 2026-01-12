"use client";

import { signOut } from "next-auth/react";

export default function SignOutBTN() {
    return (
        <button
            className="px-4 p-2 bg-blue-300 rounded-2xl hover:scale-105 shadow-md"
            onClick={() => signOut()}>
            Sign Out
        </button>
    );
}
