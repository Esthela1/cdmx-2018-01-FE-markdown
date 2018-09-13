#Pseudocodigo

Crear una herramienta usando Node.js, que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

##Entregables

-[] La libreria debe ser instalable desde github: npm install <github-user>/md-links.

-[] Debe incluir un ejecutable (archivo cli) que podamos invocar en la línea de comando como una interfaz que podamos importar con require para usarlo.

(Hasta abajo esta el check list y lo que debe ir el el planing de github)

###Lo que debe hacer la libreria

Mi libreria tiene 4 opciones y cada opcion arroja un resultado

**1.- md-links ./some/example.md (palabraClaveParaInstalar ruta del archivo que quiero leer)
./some/example.md http://algo.com/2/3/ Link a algo**

Despues de que el usuario instalo e introdujo los datos solicitados.
Quiero que mi libreria encuentre la ruta que se le indica.
despues que lea todas las lineas recorriendolas
en las lineas busque los links y los nombres de los links recorriendo todo el documento .md
una vez que encuentre los links y los nombres va a almacenarlos
despues va a arrojar en consola:

Ruta del archivo obtenida del usuario, el link encontrado y el nombre del link.
******************************
**2.- md-links ./some/example.md --validate (palabraClaveParaInstalar ruta del archivo que quiero leer y opcion)
./some/example.md http://algo.com/2/3/ ok 200 Link a algo

Despues de que el usuario instalo e introdujo los datos solicitados y la opcion --validate.
Quiero que mi libreria encuentre la ruta que se le indica.
despues que lea todas las lineas recorriendolas
en las lineas busque los links y los nombres de los links recorriendo todo el documento .md
enviara una solicitud para obtener una respuesta ok 200 o False 404
una vez que encuentre los links, la respuesta y los nombres va a almacenarlos
despues va a arrojar en consola:

Ruta del archivo obtenida del usuario, el link encontrado, ok 200/Fail 404 y el nombre del link.
********************************
3.- md-links ./some/example.md --stats (palabraClaveParaInstalar ruta del archivo que quiero leer y opcion)
Total: 3
Unique: 3

Despues de que el usuario instalo e introdujo los datos solicitados.
Quiero que mi libreria encuentre la ruta que se le indica.
despues que lea todas las lineas recorriendolas
en las lineas busque los links
y los cuente recorriendo todo el documento .md
almacene la cantidad de links
compare los links entre si y verificar si estan repetidos
y arroje la cantidad de links unicos
despues va a arrojar en consola:

Cantidad total de links encontrados y links unicos.
**************************************
4.-md-links ./some/example.md --stats --validate (palabraClaveParaInstalar ruta del archivo que quiero leer y opcion)
Total: 3
Unique: 3
Broken: 1

Despues de que el usuario instalo e introdujo los datos solicitados.
Quiero que mi libreria encuentre la ruta que se le indica.
despues que lea todas las lineas recorriendolas
en las lineas busque los links
y los cuente recorriendo todo el documento .md
almacene la cantidad de links
compare los links entre si y verificar si estan repetidos
y arroje la cantidad de links unicos
enviara una solicitud para obtener una respuesta ok 200 o False 404
una vez que encuentre los links, la respuesta y los nombres va a almacenarlos
despues va a arrojar en consola:

Cantidad total de links encontrados, links unicos y links rotos.

**********************

## Check List

### General

Que sea instalable directamente desde el repositorio de Github

- [ ] `npm install --global <github-user>/md-links`

### `README.md`

- [ ] Un board con el backlog para la implementación de la librería.
- [ ] Documentación técnica de la librería.
- [ ] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

- [ ] El módulo exporta una función con la interfaz (API) esperada.
- [ ] Implementa soporte para archivo individual
- [ ] Implementa soporte para directorios
- [ ] Implementa `options.validate`

### CLI

- [ ] Expone ejecutable `md-links` en el path (configurado en `package.json`)
- [ ] Se ejecuta sin errores / output esperado
- [ ] Implementa `--validate`
- [ ] Implementa `--stats`
- [ ] Implementa `--validate --stats`

### Pruebas / tests

- [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
      lines, y branches.
- [ ] Pasa tests (y linters) (`npm test`).
