# App creada como prueba frontend


## Explorador de películas

Esta aplicación es una plataforma en línea que te permite explorar y descubrir películas de una manera fácil y conveniente. Con nuestra barra de búsqueda intuitiva, puedes buscar películas por título y obtener una lista de películas coincidentes. Al hacer clic en una película, tendrás acceso a información detallada, como el título, la fecha de lanzamiento y una breve sinopsis. Ya sea que estés buscando películas populares o quieras descubrir gemas ocultas, nuestra aplicación está aquí para ayudarte a encontrar las películas perfectas para tu gusto. ¡Disfruta de una experiencia cinematográfica excepcional con nuestra aplicación!. La aplicación ha sido desarrollada utilizando las siguientes tecnologías:

- Next.js
- React.js
- Tailwind CSS
- Typescript
- Usando la API de [https://rapidapi.com/SAdrian/api/moviesdatabase/](https://rapidapi.com/SAdrian/api/moviesdatabase/)

### Características
- La aplicación tiene una página de inicio que muestra una barra de búsqueda y una lista de películas populares.
  
  ![image](https://github.com/David-Viuche/MovieExplorerApp/assets/39018284/8fed3796-ee1b-455b-bdd1-fdee9ae90926)

- Los usuarios pueden buscar películas por título, y la aplicación muestra una lista de películas coincidentes.
  
![image](https://github.com/David-Viuche/MovieExplorerApp/assets/39018284/b5940cbe-9255-43a8-b431-87f41029d9b2)

- Al hacer clic en una película de la lista, se muestra información adicional sobre la película, incluyendo el título, la fecha de lanzamiento 

![image](https://github.com/David-Viuche/MovieExplorerApp/assets/39018284/cd6f8403-e7d1-42a4-899f-919f70939a6a)

### Instalación
Clona el repositorio en tu máquina local:
```bash
git clone https://github.com/David-Viuche/MovieExplorerApp.git
```
Navega hasta el directorio del proyecto:
```bash
cd repo
```
Instala las dependencias:
```bash
npm install
```
Inicia la aplicación:
```bash
npm run dev
```
La aplicación estará disponible en http://localhost:3000.

## Configuración

Crea un archivo .env.local en el directorio raíz del proyecto y agrega la siguiente variable de entorno ejemplo:

```bash
NEXT_PUBLIC_API_KEY="api_key de la API"
```
Reemplaza NEXT_PUBLIC_API_KEY con tus claves de API.


