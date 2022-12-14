import { useSession } from "next-auth/react";

const UserProfile = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col gap-4">
      <div className="avatar">
        <div className="w-24 rounded">
          <img src="https://placeimg.com/192/192/people" />
        </div>
      </div>
      <div>{sessionData?.user?.email}</div>
      <div>{sessionData?.user?.id}</div>
      <div>{sessionData?.user?.image}</div>
      <div>{sessionData?.user?.name}</div>
    </div>
  );
};

export default UserProfile;
