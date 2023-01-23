# 🔴 Pokedex

## Prerequisitos
1. Node v14  mínimo
2. NPM v8 mínimo

## Pasos para probar el proyecto en local

Una vez clonado el proyecto de forma local, ingresa los siguientes comandos:

1. ``` yarn install ```
2. ``` yarn dev ```

## Demo

[React-Pokedex](https://react-pokedex-bvymw5ek9-gustavvopenna.vercel.app/)

<img width="1440" alt="Screen Shot 2023-01-23 at 17 36 57" src="https://user-images.githubusercontent.com/37059612/214176417-d6e3decd-5f17-4750-997a-a5e95edcfde4.png">

## Decisiones técnicas

### Gestión de peticiones al Servidor

En lugar de usar alguna herramienta más tradicional como Redux o Axios para obtener datos y almacenarlos en el estado global de forma local, decidí usar [React Query](https://react-query-v3.tanstack.com/), esto con el fin de obtener de forma automática caching, infinite scroll de forma sencilla y peticiones paralelas.
Esto me permitió reducir no solo cantidad de código que tuve que escribir sino la complejidad del mismo.

Una de las ventajas de usar React Query es que si una petición es lanzada nuevamente, esta no irá al servidor, en su lugar la data será extraída del caché.

### Estado Global

Se almacenaron los pokemones favoritos en el estado global, para esto se hizo uso de una librería de estado global llamada [<b>Zustand</b>](https://docs.pmnd.rs/zustand/getting-started/introduction). A diferencia de Redux o el propio Context de React,
Zustand necesita mucho menos boilerplate, reduciendo la cantidad de código y mejorando la legibilidad. Para proyectos pequeños como este, me parece una opción excelente.

### Estilos

Para crear los estilos, elegí Tailwind por la velocidad que proporciona al momento de crear interfaces personalizadas sin tener que estar creando archivos separados de CSS o pensar nombres de clases.
