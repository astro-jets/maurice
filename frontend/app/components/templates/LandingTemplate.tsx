import { LiaRecordVinylSolid } from "react-icons/lia";
import Search from "../forrms/SearchForm";
import Slider from "../sliders/topSlider";
import TrendingSlider from "../sliders/trending/Trending";
import TopTenCharts from "../MusicCharts/TopTen";
import { useEffect, useState } from "react";
import { useAuth } from "~/context/AuthContext";
import axios from "axios";
import EventsSlider from "../sliders/events/Events";
import PodcastSlider from "../sliders/podcasts/Podcasts";
import type { channelDetailsProps } from "types/video";


interface ReleaseSummary {
    id: number;
    title: string;
    featuring?: string;
    genre: string;
    cover_url: string;
    audio_url: string;
    track_number: number;
    release_title: string;
    release_date: string;
    release_type: 'single' | 'album' | 'ep';
    status: boolean;
    artist_name: string;
    plays?: number; // Added mock field for design
}
const LandingTemplate = () => {
    const [releases, setReleases] = useState<ReleaseSummary[]>([]);
    const { token } = useAuth();
    const [loading, setLoading] = useState(true);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const fetchReleases = async () => {
            try {
                const res = await axios.get("http://localhost:3001/artist/releases", {
                    headers: { Authorization: `Bearer ${token}` }
                });
                // Adding mock play counts if backend doesn't provide them yet
                const dataWithMockStats = res.data.map((r: any) => ({
                    ...r,
                    plays: Math.floor(Math.random() * 50000) + 1200
                }));
                setReleases(dataWithMockStats);
                setLoading(false)
            } catch (err) {
                console.error(err);
            }
        };
        fetchReleases();
    }, [token]);
    const channelIds = [
        'UCv36EOUNAx2_l_5lmunaWNA',
        'UChjZB_B5f76x3ZkrASt348Q',
        'UCS_65yasWSBMLr5hPco3GxQ',
        'UCnPt6wUx9nmVcFWkV8fBUEg',
        'UC7BXdXFxVgMPKmBeDgx2QrQ',
        'UC1qC9CHrHw-m_xH73gRS0mw',
        'UCQ2bTOhnT-fttJV7PYXMFcA',
    ];
    // useEffect(() => {

    //     const fetchChannels = async () => {
    //         try {
    //             const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
    //             const fetchPromises = channelIds.map(async (channelId) => {
    //                 try {
    //                     const endpoint = `https://www.googleapis.com/youtube/v3/channels?key=${API_KEY}&id=${channelId}&part=snippet`;
    //                     const response = await fetch(endpoint);
    //                     return await response.json();
    //                 } catch (error) { console.log(error) }
    //             });


    //             const allChannels = await Promise.all(fetchPromises);
    //             console.log("Channels => ", allChannels)
    //             return (allChannels.flatMap((data) => data?.items));
    //         } catch (error) {
    //             console.error('Error fetching channels:', error);
    //             // setError(error);
    //         }
    //     }
    //     const channelsRes = fetchChannels();
    //     setChannels(channelsRes as any)
    // })


    const dummyDiscover = new Array(8).fill(0).map((_, i) => ({
        id: `d-${i}`,
        title: `Studio X Mix ${i + 1}`,
        description: `Mood: Chill • ${10 + i} tracks`,
        cover: `https://picsum.photos/seed/discover-${i}/400/400`,
    }));

    const dummyAlbums = new Array(10).fill(0).map((_, i) => ({
        id: `a-${i}`,
        title: `Album ${i + 1}`,
        artist: `Artist ${i + 1}`,
        cover: `https://picsum.photos/seed/album-${i}/600/600`,
    }));

    const dummyArtists = new Array(6).fill(0).map((_, i) => ({
        id: `ar-${i}`,
        name: `Artist ${i + 1}`,
        cover: `https://picsum.photos/seed/artist-${i}/300/300`,
    }));



    return (

        <div className="flex justify-around h-full w-full overflow-hidden md:py-10 pb-20">
            <Search />

            <div className="flex flex-col items-center space-y-4 md:space-y-10 w-full h-full  md:w-3/4 ">
                <div className="p-1">
                    <div className="w-full max-h-[50vh] rounded-2xl flex items-center justify-center overflow-hidden">
                        <Slider />
                    </div>
                </div>
                <div className="flex flex-col space-y-6 h-full w-full">
                    {/* Discover */}
                    <section>
                        <div className="flex items-center justify-between mb-4 px-4 font-thin">
                            <h2 className="text-xl ">Discover</h2>
                            <a className="text-sm text-red-600">See all</a>
                        </div>

                        <div className="flex px-2 gap-4 overflow-x-auto pb-2">
                            {dummyDiscover.map((card) => (
                                <div key={card.id} className="min-w-50 bg-white dark:bg-[#101010d8] backdrop-blur rounded-lg p-3 shadow-sm">
                                    <div className="w-full h-44 rounded-md overflow-hidden mb-3">
                                        <img src={card.cover} alt={card.title} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="font-semibold">{card.title}</h3>
                                    <p className="text-sm text-gray-500">{card.description}</p>
                                </div>
                            ))}
                            {/* <SliderClosingCard icon={<FaSearch size={50} />} words={["Discover", "Extra", "Sauce"]} href="/discover" /> */}
                        </div>

                    </section>

                    <div className="w-full md:h-[42vh] flex py-2 flex-col items-start overflow-hidden">
                        <h2 className="text-xl px-4 font-thin tracking-tight text-black dark:text-white">Trending Now</h2>
                        <TrendingSlider />
                    </div>

                    {/* Chart 1: Trending Songs */}
                    <TopTenCharts title={"Playlist here"} tracks={releases} />

                    {/* New Releases */}
                    <section>
                        <div className="flex items-center justify-between mb-4 px-4">
                            <h2 className="text-xl font-thin">New Releases</h2>
                            <a className="text-sm text-red-600">See all</a>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {dummyAlbums.slice(0, 6).map((al) => (
                                <div key={al.id} className="min-w-45 bg-white dark:bg-[#101010d8] backdrop-blur rounded-lg p-3 shadow-sm">
                                    <img src={al.cover} alt={al.title} className="w-full h-40 object-cover rounded-md mb-2" />
                                    <h3 className="text-sm font-semibold">{al.title}</h3>
                                    <p className="text-xs text-gray-500">{al.artist}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Made for You */}
                    <section>
                        <div className="flex items-center justify-between mb-4 px-4">
                            <h2 className="text-xl font-thin">Made for You</h2>
                            <a className="text-sm text-red-600">See all</a>
                        </div>
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {dummyDiscover.slice(0, 5).map((mix) => (
                                <div key={mix.id} className="min-w-45 bg-white dark:bg-[#101010d8] backdrop-blur rounded-lg p-3 shadow-sm">
                                    <img src={mix.cover} alt={mix.title} className="w-full h-40 object-cover rounded-md mb-2" />
                                    <h3 className="text-sm font-semibold">{mix.title}</h3>
                                    <p className="text-xs text-gray-500">Personalized</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Upcoming Events */}
                    <div className="flex flex-col h-65 w-full items-start">
                        {/* <EventsSlider /> */}
                    </div>

                    {/* Popular Artists */}
                    <section>
                        <div className="flex items-center justify-between mb-4 px-4">
                            <h2 className="text-xl font-thin">Popular Artists</h2>
                            <a className="text-sm text-red-600">See all</a>
                        </div>
                        <div className="flex gap-6 overflow-x-auto pb-2">
                            {dummyArtists.map((artist) => (
                                <div key={artist.id} className="min-w-30 text-center">
                                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-2">
                                        <img src={artist.cover} alt={artist.name} className="w-full h-full object-cover" />
                                    </div>
                                    <p className="text-sm font-medium">{artist.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Chart 2: Top Albums */}
                    <div className="px-2 w-full h-full space-y-4">
                        <div className="flex w-full items-center space-x-1">
                            <LiaRecordVinylSolid size={25} className="fill-black dark:fill-white" />
                            <h2 className="text-xl font-thin tracking-tight text-black dark:text-white">Top Albums</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {dummyAlbums.map((album, index) => (
                                <div
                                    key={index}
                                    className=" shadow-[#222] shadow-4 dark:shadow-1 dark:bg-[#0f0f0fce] bg-white/30  p-1 rounded-2xl hover:bg-gray-700 text-center"
                                >
                                    <div className="w-full h-50 rounded-2xl overflow-hidden">
                                        <img
                                            src={album.cover}
                                            alt="Album Art"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <h3 className="text-black dark:text-white font-thin mt-2 text-start">{album.title}</h3>
                                    <p className="text-[#222] dark:text-gray-300 text-sm text-start">{album.artist}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Featured Podcasts */}
                    <div className="flex flex-col h-70  w-full items-start">
                        {/* <PodcastSlider channels={channels as channelDetailsProps[]} /> */}
                    </div>
                </div>


            </div>


        </div>
    );
}


export default LandingTemplate;