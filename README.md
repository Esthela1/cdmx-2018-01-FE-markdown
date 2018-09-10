# Proyecto

Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando Node.js,
que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

La implementación de este proyecto tiene varias partes:
leer del sistema de archivos
recibir argumentos a través de la línea de comando,
analizar texto
hacer consultas HTTP
... y todas estas cosas pueden enfocarse de muchas formas,
 tanto usando librerías como implementando en VanillaJS.

El parseado (análisis) del markdown para extraer los links podría plantearse de las siguientes maneras:
Podríamos usar una combinación de varios módulos
Podría ser transformar el markdown a HTML usando algo como marked
y de ahí extraer los link con una librería de DOM como JSDOM o Cheerio entre otras.

## Para convertir el archivo MD en HTML escribe en bash: $ markdownb README.md
y se generara una vista en el navegador predeterminado.

### Pistas

- [Marked](https://github.com/markedjs/marked/blob/master/docs/USING_PRO.md)
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
- [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Crear módulos en Node.js](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- [Leer un archivo](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
- [Leer un Directorio](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
- [Path](https://nodejs.org/api/path.html)
- [Linea de comando CLI](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
- [npm install githubname/reponame](https://docs.npmjs.com/cli/install)

### Tutoriales / NodeSchool workshoppers

- [learnyounode](https://github.com/workshopper/learnyounode)
- [how-to-npm](https://github.com/workshopper/how-to-npm)
- [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Otros recursos

- [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
- [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
- [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
- [Node.js - Wikipedia](https://es.wikipedia.org/wiki/Node.js)
- [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
- [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
- [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
- [¿Simplemente qué es Node.js? - IBM Developer Works, 2011](https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)
