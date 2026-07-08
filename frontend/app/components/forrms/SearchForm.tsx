
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
    const [search, setSearch] = useState("")
    // const router = router();

    const searchSong = (e: any) => {
        e.preventDefault()
        if (search.trim() !== '') {
            setSearch("")
            // router.push(`/search/?s=${search}`);
        }

    }
    return (
        <div className="search-bar md:hidden">
            <form>
                <input
                    type="text"
                    placeholder="search"
                    name="search_item"
                    className="search w-full font-thin bg-transparent outline-none text-white px-3 py-3 placeholder:text-gray-200"
                    id="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />


                <button type="submit" className="btn off" onClick={searchSong}>
                    <BsSearch color='black' size={20} />
                </button>

            </form>

        </div>
    );
}

export default Search;