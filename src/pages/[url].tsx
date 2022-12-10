import { useRouter } from "next/router";
import { useEffect } from "react";
import { trpc } from "../utils/trpc";

const ShortenedUrl = () => {
  const router = useRouter();
  const { url } = router.query;

  //   const { data, isSuccess } = trpc.urlShortener.getUrlMatch.useQuery({
  //     url: url === typeof "string" && url !== undefined ? url : "",
  //   });

  return <div>{url}</div>;
};

export default ShortenedUrl;
