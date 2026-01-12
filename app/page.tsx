import { auth } from "@/auth";
import SignIn from "@/components/SignInBTN";
import SignOutBTN from "@/components/SignOutBTN";



export default async function Home() {
  const session = await auth();

  return (
    <div className="p-10">
      <section>
        {session?.user ? (
          <SignOutBTN />
        ) : (
          <SignIn />
        )}
      </section>

      <br />
      
      {session?.user ? (
        <>Welcome {session.user.email}</>
      ) : (
        <>Please signed in</>
      )}
    </div>
  );
}
