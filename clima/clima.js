const axios = require('axios');


const getClima = async(lat, lng) => {

    // const resp = await axios.get(`api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=f369635965b00ad16ced5da4da4b9f3b&units=metric`);

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    let httpsProxyAgent = require('https-proxy-agent');
    var agent = new httpsProxyAgent('http://x8937003:Casa2030@proxy01.aysa.ad:80');

    const instance = axios.create({
        httpsAgent: agent,
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f369635965b00ad16ced5da4da4b9f3b&units=metric`
    });

    const resp = await instance.get();

    return resp.data.main.temp;

};

module.exports = {
    getClima
}