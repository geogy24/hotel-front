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

Copyright 2020 Jorge Eduardo Díaz Leytón
Por la presente se concede permiso, libre de cargos, a cualquier persona que obtenga una copia de este software y de los archivos de documentación asociados (el "Software"), a utilizar el Software sin restricción, incluyendo sin limitación los derechos a usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar, y/o vender copias del Software, y a permitir a las personas a las que se les proporcione el Software a hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "COMO ESTÁ", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR E INCUMPLIMIENTO. EN NINGÚN CASO LOS AUTORES O PROPIETARIOS DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O CUALQUIER OTRO MOTIVO, DERIVADAS DE, FUERA DE O EN CONEXIÓN CON EL SOFTWARE O SU USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.
