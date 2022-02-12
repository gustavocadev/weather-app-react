import Header from "./components/Header";
import { FormEvent, useEffect, useState } from "react";
import Weather from "./components/Weather";
const App = () => {
    const [search, setSearch] = useState({
        city: "",
        country: "",
    });
    const [error, setError] = useState(false);
    const [weatherResp, setWeatherResp] = useState({});

    // destructuring
    const { city, country } = search;

    const getWeather = async () => {
        const API_KEY = "2336fa17727ec5721289f24e60a156b0";
        const api = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`;
        console.log(api);
        const resp = await fetch(api);
        const data = await resp.json();
        setWeatherResp(data);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const states = [country.trim(), city.trim()];
        if (states.includes("")) {
            setError(true);
            return;
        }
        setError(false);

        await getWeather();

        setSearch({
            city: "",
            country: "",
        });
    };

    console.log(weatherResp);

    return (
        <>
            <Header title="Weather React app" />
            <section className="bg-sky-600 px-[132px] py-4 grid grid-cols-2">
                <form
                    className="text-white flex flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    {error && (
                        <p className="bg-red-500 rounded p-4 text-xl">Error</p>
                    )}
                    <input
                        type="text"
                        placeholder="City"
                        className="bg-sky-600 px-4 py-2 rounded-lg text-white placeholder-gray-300 border-b-2 border-white focus:outline-none focus:border-white"
                        value={city}
                        onChange={(e) =>
                            setSearch({ ...search, city: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        list="countries"
                        className="px-4 py-2 bg-blue-400  rounded focus:outline-none placeholder-gray-700"
                        placeholder="Country"
                        value={country}
                        onChange={(e) =>
                            setSearch({ ...search, country: e.target.value })
                        }
                    />
                    <datalist id="countries">
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </datalist>
                    <button
                        type="submit"
                        className="bg-yellow-300 text-black border px-4 py-2 rounded "
                    >
                        Search Weather
                    </button>
                </form>
                {JSON.stringify(weatherResp) !== "{}" && (
                    <Weather weatherResp={weatherResp} />
                )}
            </section>
        </>
    );
};

export default App;
