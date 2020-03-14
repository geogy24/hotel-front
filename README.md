# Hoteles

## Inicio

Esta es la interfaz de la aplicación de hoteles.

### Prerequisitos

Debe instalar los siguientes paquetes para poder ejecutar la aplicación

- npm versión 3.10.10 o superior
- node versión 6.13.1 o superior

```
sudo apt-get install -y nodejs
sudo apt-get install -y npm
```

### Instalando

Luego de clonar el repositorio, por medio de npm instale las dependencias

```
npm install
sudo npm install -g @angular/cli
```

Ejecute la aplicación de la siguiente manera en caso de ejecutarla en modo desarrollo 

```
ng serve
```

Para ejecutarla en modo producción, copie la carpeta dist en la carpeta raíz de su servidor web preferido y apunte el DocumentRoot a la carpeta dist para servir la aplicación.

**IMPORTANTE**

En producción es requerido cambiar los CORS de la aplicación en el backend, por favor revise la documentación (README.md) del backend

En algunas ocasiones npm no instala de manera adecuada bootstrao por lo que este debe instalarse manualmente

```
sudo npm install --save @ng-bootstrap/ng-bootstrap@2.0.0
```

## Despliegue


## Construido con

* [Angularjs](https://angular.io/) - Web Framework usado

## Contribución

## Versionado

## Autores

* **Jorge Eduardo Díaz Leytón**

## Licencia

MIT License

Copyright (c) 2020 Jorge Díaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
