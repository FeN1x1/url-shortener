import { useSession } from "next-auth/react";
import UserProfile from "../components/UserProfile";
import UserUrls from "../components/UserUrls";

const Profile = () => {
  const { status } = useSession();

  if (status === "unauthenticated") {
    return (
      <div className=" text-center text-white">
        <div className="pb-2 text-3xl">Access Denied</div>
        <div className="text-sm">(Please login to continue)</div>
      </div>
    );
  }
  return (
    <>
      <UserUrls />
      <UserProfile />
    </>
  );
};

export default Profile;
