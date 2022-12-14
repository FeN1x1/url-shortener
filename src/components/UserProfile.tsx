import { useSession } from "next-auth/react";
import { useState } from "react";
import { trpc } from "../utils/trpc";
import UserNameModal from "./UserNameModal";

const UserProfile = () => {
  const [isOpenUserNameModal, setIsOpenUserModal] = useState(false);
  const [username, setUsername] = useState("");

  const { mutate: changeName } = trpc.auth.changeName.useMutation();

  const { data: sessionData } = useSession();

  const handleSetIsOpenUserModal = (isOpenPar: boolean) => {
    setIsOpenUserModal(isOpenPar);
    changeName({ id: sessionData?.user?.id ?? "", name: username });
  };

  return (
    <div className="z-[2] overflow-x-auto">
      <UserNameModal
        isOpen={isOpenUserNameModal}
        setIsOpen={handleSetIsOpenUserModal}
        usernameValue={username}
        setUsernameValue={setUsername}
      />
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            {/* <th>Edit name</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th onClick={() => ({})}>{sessionData?.user?.id}</th>
            <th
              className={`${
                sessionData?.user?.name === null ? "text-red-500" : ""
              }`}
              onClick={() => ({})}
            >
              {sessionData?.user?.name ?? "No name set yet"}
            </th>
            <th onClick={() => ({})}>{sessionData?.user?.email}</th>
            <th>
              <button onClick={() => setIsOpenUserModal(true)}>sds</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserProfile;
