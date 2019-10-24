const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    let httpsProxyAgent = require('https-proxy-agent');
    var agent = new httpsProxyAgent('http://x8937003:Casa2030@proxy01.aysa.ad:80');

    const instance = axios.create({
        httpsAgent: agent,
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '8e5c1cef89msh15e05320b1984c5p1baceejsn44589770984d' }

    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    };

};

module.exports = {
    getLugarLatLng
}