import Head from "next/head";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";
import PlaylistContextProvider from "../contexts/PlaylistContext";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <PlaylistContextProvider>
        <Head>
          <title>Spotify!!!</title>
          <meta name="description" content="Spotify 2.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex">
          <Sidebar />
          <Center />
        </div>
      </PlaylistContextProvider>
    </div>
  );
}
