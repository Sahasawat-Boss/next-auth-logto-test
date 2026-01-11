"use client";

import { signOut } from "@/auth";

export function SignOut() {
    return <button onClick={() => signOut()}>Sign Out</button>;
}
