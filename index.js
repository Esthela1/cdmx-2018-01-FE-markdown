// funcion leer el readme
const fs = require('fs');
const readReadme = (callback) => {
  fs.readFile('./README.md', 'utf8', (err, data)=>{
    if (err) {
      console.log('Tienes un error');
    } else {
      link(data);
    }
  });
};  
readReadme();

