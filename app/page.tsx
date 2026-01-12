import { auth } from "@/auth";
import SignIn from "@/components/SignInBTN";
import SignOutBTN from "@/components/SignOutBTN";



export default async function Home() {
  const session = await auth();

  return (
    <div>
      <section className="p-2">
        <SignIn/>
        <SignOutBTN />
      </section>
      <br />
      {session?.user ? (
        <>Welcome {session.user.email}</>
      ) : (
        <>Not signed in</>
      )}
    </div>
  );
}
