type WeatherProps = {
    weatherResp: any;
};

const Weather = ({ weatherResp }: WeatherProps) => {
    const { name, main } = weatherResp;
    return (
        <section className="p-4 text-white text-center">
            {weatherResp.cod !== "404" ? (
                <>
                    <p className="text-4xl">El clima de {name} es: </p>
                    <p className="text-4xl">{main.temp} &#x2103;</p>
                </>
            ) : (
                <p className="text-4xl">No se encontró el clima</p>
            )}
        </section>
    );
};

export default Weather;
