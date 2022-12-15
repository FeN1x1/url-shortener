import { useSession } from "next-auth/react";
import AccessDenied from "../components/AccessDenied";
import UserProfile from "../components/UserProfile";
import UserUrls from "../components/UserUrls";

const Profile = () => {
  const { status } = useSession();

  if (status === "unauthenticated") {
    return <AccessDenied />;
  }
  return (
    <>
      <h2 className="pb-2 text-center text-3xl text-purple-400">
        User Profile
      </h2>
      <UserProfile />
      <h2 className="pb-2 text-center text-3xl text-purple-400">
        Generated URLs
      </h2>
      <UserUrls />
    </>
  );
};

export default Profile;
