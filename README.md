# Desafio técnico Modyo - Frontend Developer

## Presentación

Estimados, este código está hecho para evaluar mis conocimientos como desarrollador frontend. Mi nombre es [Vicente Reyes Cáceres](https://www.linkedin.com/in/vicente-reyes-caceres/), tengo 23 años y soy estudiante de Ingeniería Civil en Informática de la Universidad de Valparaíso, Chile.

## Preparación

Para poder ejecutar la aplicación, es necesario cumplir con ciertos requisitos en el equipo a ejecutar el código:

- Tener instalado NodeJS (la app fue desarrollada con la versión 10.2.3)
- Tener instalado Git

## Instalación

Para poder utilizar la aplicación, debes clonar el repositorio público creado por mí con el siguiente comando de Git

```bash
git clone https://github.com/Soujiro17/desafio-tecnico-modyo.git
```

Luego de clonar el repositorio, se debe acceder a la carpeta del proyecto recién clonado

```bash
cd desafio-tecnico-modyo
```

Dentro de la carpeta habrán dos carpetas llamadas "public" y "src", como también otros archivos de configuración.

Para instalar las dependencias del proyecto, utiliza tu manejador de paquetes preferido para realizar la instalación de los paquetes. En mi caso, trabajé con pnpm, por lo que el comando adjunto será de ese manejador.

```bash
pnpm i
```

Al ejecutar este comando comenzará la instalación de los paquetes. Debes esperar un poco hasta que salga un mensaje de éxito o término.

## Ejecución

Para iniciar el proyecto, es necesario ejecutar el siguiente comando dentro de la carpeta **desafio-tecnico-modyo**

```bash
pnpm run dev
```

En la línea de comandos (cmd, bash) se desplegará la url de donde se ha levantado un servidor con el código en ejecución. Por lo general (y por defecto) es la url [http://localhost:5173](http://localhost:5173)

## Conclusión

En general, el desarrollo de este desafío técnico estuvo entretenido de hacer. Esta es mí versión del código, lo cual claramente no quiere decir que sea perfecto, sin embargo, lo desarrollé con el conocimiento que he adquirido durante los años.

Si bien todo el código lo hice yo, se me presentaron diversas dificultades:

- Poco o nada conocimiento de Tailwind: En algún momento como desarrollador quería crear algo con Tailwind para aprender a utilizar este framework, pero siempre quedó en standby. Debido a esto, tuve que acceder a la documentación de las clases (tipo Cheat Sheet) para seleccionar las que no conocía.
- Rotación 3D: Al momento de leer el desafío, se me vino a la mente inmediatamente esa animación de tipo "voltear" al clickear una carta. Si bien conocía esta propiedad de CSS, nunca la había utilizado, por lo que tuve que buscar información acerca de ella en MDN Web Docs.
- Shuffle.js: Utilicé un código de StackOverflow que se encargaba de desordenar de manera aleatoria el array de las imágenes. El link del post se puede acceder desde [aquí](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
- Accesibilidad: Me resultó dificultoso el hecho de agregar accesibilidad ya que no estoy acostumbrado a hacerlo. Tuve que leer acerca de eso en [W3S](https://www.w3schools.com/accessibility/).

## Task List

### Juego

- [x] La primera vez que un usuario ingrese al juego se le debe solicitar el nombre.

- [x] Mostrar un tablero con un grupo de cartas boca abajo y un marcador con un espacio para mostrar: Errores, Aciertos.

- [x] El jugador debe ir volteando las cartas intentando adivinar las cartas que se repiten.

- [x] Todas las cartas se encuentran repetidas 1 vez en el tablero.

- [x] Por cada turno el jugador debe voltear 2 cartas.

- [x] Si las cartas no coinciden, se debe sumar 1 punto de error en el marcador.

- [x] Si las cartas coinciden, se debe sumar 1 punto de acierto en el marcador.

- [x] Las cartas que el usuario acierte deben quedar boca arriba mientras que las cartas de error deben volver a quedar boca abajo.

- [x] Una vez que el usuario logre adivinar todas las cartas, se debe mostrar un mensaje de felicitación con el nombre del usuario

### Consideraciones

- [x] Utiliza alguna metodología de nombramiento de clases css ej: BEM

- [x] Todas las variables, métodos, clases o cualquier cosa relacionada con el código debe ser en inglés.

- [x] Incluir instrucciones para probar el proyecto en local en un fichero de nombre README.md ubicado en la raíz del proyecto o en su defecto desplegarlo en algún ambiente explicando en el readme que método se utilizó para el despliegue.

- [x] Para las imágenes de las cartas se deben mostrar fotos de animales. Las fotos de animales se deben obtener utilizando peticiones asíncronas desde el siguiente endpoint: GET: https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20

- [x] Las imágenes no vienen repetidas, así que la lógica para poder construir el juego debe quedar en el Frontend.

- [x] El diseño se debe adaptar a los distintos tipos de dispositivos (diseño responsivo).

- [ ] ~~Los test no son requeridos pero suman puntos si los agrega correctamente.~~

- [x] Proponer un diseño de interfaz para la vista. Más abajo se muestra una imagen con una estructura de referencia, pero darle un estilo más personalizado sumará puntos.

- [x] Preocupación por el performance y accesibilidad de la aplicación.
