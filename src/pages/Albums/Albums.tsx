import { Link } from "react-router-dom";
import { useGetAlbumsQuery } from "../../data/albums/store";

const Albums = () => {
  const { data: albums = [] } = useGetAlbumsQuery();

  return (
    <div>
      <h1 className="text-center mt-11 text-2xl">Альбоми</h1>
      <div className="">
        {albums.map((album) => (
          <div key={album.id} className="border-2 border-teal-400 m-2 p-2">
            <Link to={`/albums/${album.id}`}>
              <h3>{album.id}. {album.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
