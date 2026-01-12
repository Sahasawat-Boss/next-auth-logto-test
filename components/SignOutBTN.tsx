"use client";

import { signOut } from "next-auth/react";

export default function SignOutBTN() {
    return (
        <button onClick={() => signOut()}>
            Sign Out
        </button>
    );
}
