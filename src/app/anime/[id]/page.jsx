import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-dark">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-dark overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-dark over">
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-dark">
          <h3>SKOR</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-dark">
          <h3>POPULARITAS</h3>
          <p>{anime.data.popularity}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-dark">
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>

      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-dark">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
