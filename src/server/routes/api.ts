import axios, { AxiosResponse, AxiosError } from 'axios';
import { Request, Response, Router } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const router = Router();
router
  .get('/location', (req: Request, res: Response) => {
    const params = req.query;
    axios
      // Me devuelve el clima según coordenadas
      .get(`${process.env.API_PATH_PRODUCTION}weather?lang=es&units=metric&lat=${params.lat}&lon=${params.lon}&appid=${process.env.APP_WEATHER_ID}`)
        .then((a:AxiosResponse) => {
          const { data } = a;
          const result: IAPIResponse = {
            data: <IGetCityWeatherByCoords>{
              temperature: {
                value: data.main.temp,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                min: data.main.temp_min,
                max: data.main.temp_max,
              },
              location: {
                zone: data.name,
                country: data.sys.country,
              },
              coord: {
                lon: data.coord.lat,
                lat: data.coord.lon,
              },
              weather: data.weather,
            }
          }
          res
            .status(200)
            .json(result);
        })
        .catch((error: AxiosError) => {
          res.json({
            error
          })
        });
    })
    // Me devuelve el clima según la ciudad
    .get('/current/:city', (req: Request, res: Response) => {
      const city: string = req.params.city;
      axios
        .get(`${process.env.API_PATH_PRODUCTION}weather?lang=es&units=metric&q=${city}&appid=${process.env.APP_WEATHER_ID}`)
          .then((a:AxiosResponse) => {
            const { data } = a;
            const result: IGetCityForecastByName = {
              cod: data.cod,
              location: {
                zone: data.name,
                country: data.sys.country,
              },
              coord: {
                lat: data.coord.lon,
                lon: data.coord.lat,
              },
              temperature: {
                value: data.main.temp,
                pressure: data.main.pressure,
                humidity: data.main.humidity,
                min: data.main.temp_min,
                max: data.main.temp_max,
              },
              weather: data.weather,
            };
            res
              .status(200)
              .json(result);
          })
          .catch((error: AxiosError) => {
            res.json({
              error
            })
          })
    })
    // Me devuelve el tiempo en los próximos dias
    .get('/forecast', (req: Request, res: Response) => {
      const params = req.query;
      axios
        .get(`${process.env.API_PATH_PRODUCTION}forecast?lang=es&units=metric&lat=${params.lat}&lon=${params.lon}&appid=${process.env.APP_WEATHER_ID}`)
        .then((a:AxiosResponse) => {
          const { data } = a;
          const parsedList = data.list.map((day:any):WeatherPeriodType => {
            return <WeatherPeriodType>{
              temperature: {
                value: day.main.temp,
                pressure: day.main.pressure,
                humidity: day.main.humidity,
                min: day.main.temp_min,
                max: day.main.temp_max,
              },
              dt: day.dt,
              dt_txt: day.dt_txt,
              weather: {
                description: day.weather[0].description,
              },
              wind: day.wind
            }
          })
          const result: IGetCityForecastByCoords = {
            cod: data.cod,
            list: parsedList,
          }
          res
            .status(200)
            .json(result);
        })
        .catch((error: AxiosError) => {
          res.json({
            error
          })
        })
    });


export default router;