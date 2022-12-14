import Link from "next/link";
import { trpc } from "../utils/trpc";

const UserUrls = () => {
  const { data, isFetched, refetch } =
    trpc.urlShortener.getAllUserUrls.useQuery();

  const { mutate: deleteUrl } = trpc.urlShortener.deleteUrl.useMutation({
    onSuccess: () => refetch(),
  });

  const handleUrlClick = () => {
    return true;
  };
  const handleDeleteUrl = (id: string) => {
    deleteUrl({
      id,
    });
  };
  const handleUrlToRedirectClick = () => {
    return true;
  };
  return (
    <div className="z-[2] overflow-x-auto">
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th>Id</th>
            <th>Redirect URL</th>
            <th>Local URL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {isFetched &&
            data?.map((u) => {
              return (
                <tr key={u.id}>
                  <th>{u.id}</th>
                  <th className="transition duration-150 hover:text-purple-700">
                    <a
                      target="_blank"
                      href={`https://${u.url}`}
                      rel="noreferrer"
                    >
                      {u.url}
                    </a>
                  </th>
                  <th
                    className="cursor-pointer transition duration-150 hover:text-purple-700"
                    onClick={handleUrlToRedirectClick}
                  >
                    <Link href={`${u.urlToRedirect}`}>{u.urlToRedirect}</Link>
                  </th>
                  <th
                    className="cursor-pointer transition duration-150 hover:text-red-400"
                    onClick={() => handleDeleteUrl(u.id)}
                  >
                    Delete
                  </th>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr></tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UserUrls;
