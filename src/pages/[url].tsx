import { useRouter } from "next/router";
import { useEffect } from "react";
import { Dna } from "react-loader-spinner";
import { trpc } from "../utils/trpc";

const ShortenedUrl = () => {
  const router = useRouter();
  const { url } = router.query;

  const { data } = trpc.urlShortener.getUrlMatch.useQuery({
    url: url as string,
  });

  useEffect(() => {
    data?.url && location.replace(`https://${data.url}`);
  }, [data?.url]);

  return (
    <div className="flex flex-col gap-4">
      <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text pb-4 text-center text-4xl font-semibold text-transparent">
        {" "}
        Redirecting...
      </span>
      <Dna
        visible={true}
        height="160"
        width="160"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default ShortenedUrl;
