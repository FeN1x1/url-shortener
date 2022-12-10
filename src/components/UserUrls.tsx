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
    <div className="flex gap-4">
      {isFetched &&
        data?.map((u) => {
          return (
            <div className="flex flex-col gap-4" key={u.id}>
              <div onClick={handleUrlClick}>{u.url}</div>
              <div onClick={handleUrlToRedirectClick}>{u.urlToRedirect}</div>
              <div onClick={() => handleDeleteUrl(u.id)}>Delete</div>
            </div>
          );
        })}
    </div>
  );
};

export default UserUrls;
