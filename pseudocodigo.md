#Pseudocodigo

Crear una herramienta usando Node.js, que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

##Entregables

-[] La libreria debe ser instalable desde github: npm install <github-user>/md-links.

-[] Debe incluir un ejecutable (archivo cli) que podamos invocar en la línea de comando como una interfaz que podamos importar con require para usarlo.

(Hasta abajo esta el check list y lo que debe ir el el planing de github)

###Lo que debe hacer la libreria
    Cuando en mi libreria el usuario escriba: 
            Obtendra este resultado:

     Y la libreria arrojara este resultado así:

**1.- md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo**

2.- md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo

3.- md-links ./some/example.md --stats
Total: 3
Unique: 3

4.-md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1


Quiero que mi libreria encuentre el reame.md
despues que lea todas las lineas
en las lineas busque los links
una vez que encuentre los links va a hacer una solicitud 
si la solicitud regresa con 200 guarde el resultado 
si la solicitud regresa con un 400 tambien lo guarde
despues al haber leido todo el readme

     arrojar en consola: link (url), nombre del link(o texto) y resultado () ruta del archivo .md 

Los tests unitarios deben cubrir un mínimo del 70% de statements, functions, lines y branches. Te recomendamos explorar Jest para tus pruebas unitarias.

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
