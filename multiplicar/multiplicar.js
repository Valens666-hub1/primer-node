//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('============================='.green);
    console.log(`======== Tabla de ${base}====`.green);
    console.log('============================='.green);
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido de Base: ${base}, No es un número`);
            return;
        }        
        if(!Number(limite)){
            reject(`El valor introducido de Limite: ${limite}, No es un número`);
            return;
        }
        let data = '';
        for (let index = 1; index <= limite; index++) {            
            console.log(`${base} * ${index} = ${base * index}`)
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}-${limite}.txt`);            

        });
    });
}

let crearArchivo = (base, limite = 10) => {
    console.log('============================='.red);
    console.log(`======== Tabla de ${base}====`.red);
    console.log('============================='.red);
    return new Promise((resolve, reject) => {
        if(!Number(base)){
            reject(`El valor introducido: ${base}, No es un número`);
            return;
        }
        let data = '';
        for (let index = 1; index <= limite; index++) {
            const element = index * 2;
            console.log(`${base} * ${index} = ${base * index}`)
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}limte${limite}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}limite${limite}.txt`);            

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
