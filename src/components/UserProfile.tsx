import { useState } from "react";
import { trpc } from "../utils/trpc";
import UserNameModal from "./UserNameModal";

const UserProfile = () => {
  const [isOpenUserNameModal, setIsOpenUserModal] = useState(false);
  const [username, setUsername] = useState("");

  const { mutate: changeName } = trpc.auth.changeName.useMutation({
    onSuccess: () => refetchName(),
  });
  const { data: user, refetch: refetchName } = trpc.auth.getName.useQuery();

  const handleSubmit = () => {
    setIsOpenUserModal(false);
    setUsername("");
    changeName({ id: user?.id ?? "", name: username });
  };

  return (
    <div className="z-[2] overflow-x-auto">
      <UserNameModal
        isOpen={isOpenUserNameModal}
        setIsOpen={(par) => setIsOpenUserModal(par)}
        usernameValue={username}
        setUsernameValue={setUsername}
        handleSubmit={handleSubmit}
      />
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{user?.id}</th>
            <th
              className={`cursor-pointer transition duration-150 hover:text-purple-700 ${
                user?.name === null || user?.name === "" ? "text-red-500" : ""
              }`}
              onClick={() => setIsOpenUserModal(true)}
            >
              {user?.name === null || user?.name === ""
                ? "No name set yet"
                : user?.name}
            </th>
            <th>{user?.email}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserProfile;
