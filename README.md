# Titulo del proyecto

Hoteles - Frontend

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

!IMPORTANTE¡
En modo producción es requerido cambiar los CORS de la aplicación en el backend, por favor revise la documentación (README.md) del backend

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
