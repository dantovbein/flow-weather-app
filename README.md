# Flow Weather App (front + back end)

Flow Weather App es un proyecto experimental que provee información sobre el clima, no solo en la posición donde el usuario esta corriendo la aplicación, sino que también te permite buscar hasta 5 ciudades y ver el clima actual y los próximos 5 días.


El desarrollo es fullstack y _Vale aclarar que no utilicé ningún boilerplate_


## ¿Porqué decidí utilzar cada una de las siguientes tecnologías?

  - *Typescript + TSLint*: Te permite trabajar de forma más consistente y ordenada. Si bien es un proyecto experimental, siempre hay que tener en mente la idea de escalararlo.

  - *ReactJS*: Traté de utilizar distintas funcionalidades para demostrar que no siempre hay un único camino para la resolución de problemas. Implementé Containers, Class Components, Functional Componentes (con hooks).

  - *Redux*: Si bien para este tipo de aplicaciones se puede obviar Redux, opté por implementarlo y para demostrar mis conocimientos en la materia (Javascript y Typescript).

  - *Router*: No es necesario para este tipo de aplicaciones, pero decidí hacerlo por la misma razón que decidí implementar redux. el path '/' redirecciona a '/cities' y hace el match con el componente.

  - *SASS + BEM*: Te permite trabajar de forma mas práctica y poder escalar tus proyectos con mayor facilidad. La unidad que decidí adoptar para los selectores es `rem` y pensarla como full-responsive

  - *JEST*: Es la libreria mas compatible con React para correr test.

  - Webpack: Opté por implementarlo y demostrar mis conocimientos en la materia.

  - Babel: Como el desarrollo es integramente en Typescript, necesito compilar el codigó a Javascript.

  - Express: Mas allá de que la consigna está enfocada principalmente al lado del cliente, decidí implementar un servidor en Express para que funcione como puente entre la app y la api del Open Wather y la app reciba los campos según la defición de su tipo (ej: `IGetCityWeatherByCoords`) y no campos innecesarios.

    ```typescript
    IGetCityForecastByName = {
    cod: 200,
    coord: {
      lat: 10,
      lon: -19,
    },
    location: {
      city,
      country: 'Argentina',
      zone: 'Villa Crespo'
    },
    temperature: {
      humidity: 100,
      max: convertToCelsius(489),
      min: convertToCelsius(345),
      pressure: 1003,
      seaLevel: 1,
      value: convertToCelsius(400)
    },
    weather: [{
      description: 'Nublado',
      icon: '',
      id: 299,
      main: ''
    }],
    wind: {
      speed: 1000
    }
    ```


## Instalación + comandos de tareas

  `npm install` aunque puede llegar a pasar que algunas dependencias tengan que estar previamente instaladas de forma global, ej. Typescript, Webpack ó Webpack Dev Server.

  `start:client` para desarrollar la aplicación del lado del cliente (compilando todo), toma la configuración de webpack dev

  `build:client:dev` Compila la aplicación del lado del cliente y toma la configuración de webpack dev
  
  `start:server` para desarrollar la aplicación del lado del servidpr (compilando todo), toma la configuración de webpack server y corre el servidor

  `build:sever` Compila la aplicación del lado del servidor y toma la configuración de webpack server

  `jest` Corre los test de la aplicación

## ¿Cómo correr la app?

Hay que correrla en 2 terminales distintas con los siguientes comandos siempre y cuando se hayan instalado todas las dependencias con `npm install`:

`npm run start:cient` en el puerto 5053
`npm run start:server` en el puerto 5350


## Requisitos

  - Node 12.*
  - NPM

## Extra

  - Este es el repositorio (https://gitlab.com/dantovbein/deaene-cli) del programa que desarrollé en Bash pensado para automatizar y agilizar tareas relacionadas con React, GitHub y FTP y así poder mejorar el funcionamiento del equipo. *No lo utilicé en esta ocasión*


### Un detalle extra

Por último, en el código, más precisamente en el type definition de la API, dejé un método comentados para mostrar la diferencia entre la lógica del cliente vs la lógica del servidor.



¡Muchas gracias!

Dan Tovbein