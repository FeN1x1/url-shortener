import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="w-full max-w-4xl px-6">
      <ul className="flex items-center justify-center gap-4 text-xl text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        {sessionData && (
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        )}

        {!sessionData ? (
          <li className="ml-auto cursor-pointer" onClick={() => signIn()}>
            Sign in
          </li>
        ) : (
          <li className="ml-auto cursor-pointer" onClick={() => signOut()}>
            Sign out
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
