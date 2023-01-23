# react-pokedex

## Prerequisitos
1. Node v14  mínimo
2. NPM v8 mínimo

## Pasos para probar el proyecto en local

Una vez clonado el proyecto de forma local, ingresa los siguientes comandos:

1. ``` yarn install ```
2. ``` yarn dev ```

## Demo

[React-Pokedex](https://react-pokedex-bvymw5ek9-gustavvopenna.vercel.app/)

## Decisiones tecnicas

### Gestión de peticiones al Server

En lugar de usar alguna herramienta más tradicional como Redux ó Axios para obtener datos y almacenarlos en el estado global de forma local, decidí usar *React Query*, esto con el fin de obtener de forma automática caching, infinite scroll de forma sencilla y peticiones paralelas.
Esto me permitío reducir no solo cantidad de código que tuve que escribir sino la complejidad del código.

Una de la ventajas de usar React Query es que sin una peticion es lanzada nuevamente, esta no irá al server sino que la data sera extraida del cache.

### Estado Global

Se almacenaron los pokemones favoritos en el estado global, para esto se hizo uso de una librería de estado global llamada *Zustand*. A diferencia de Redux o el propio Context de React,
Zustand necesita mucho menos boilerplate, reduciendo la cantidad de código y mejorando la legibilidad. Para proyectos pequeños como este me parece una opción
excelente.
