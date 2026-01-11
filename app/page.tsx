import { auth } from "@/auth";
import SignIn from "@/components/SignInBTN";
import { SignOut } from "@/components/SignOutBTN";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <SignIn/>
      <SignOut/>
      <br/>
      {session?.user ? (
        <>Welcome {session.user.email}</>
      ) : (
        <>Not signed in</>
      )}
    </div>
  );
}
