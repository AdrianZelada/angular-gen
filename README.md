# Angular Generator
 
Generador de templetas de html y typescript para Angular 4. Esta libreria genera archivos con codigo compatible para angular.

A diferencia de angular-cli ,esta libreria puede generar un Modulo con sus respectivas routas, Componentes , Servicio, todo ello enviandole un json de configuracion.

 
 ## Installation
 
 ```sh
 npm install -g angularx-generator
 ```
 
 ## Modo de Uso
 
     -t, --type               Type of Template for generate
     -n, --name               Name of Template
     -f, --file               Generate files using a json
     -p, --path               Generate files with other path using a json
     -w, --withFolder         Generate files with Folder
     -h, --help               Output usage information
     
     
```sh
 angugen -t component -n dashboard
 ```
 Este comando genera una carpeta con el nombre de **dashboard-component** el cual tendra 2 archivos 
 > *dashboard.component.html*
 
 > *dashboard.component.ts*

```sh
 angugen -t service -n https
 ```
 Este comando genera una carpeta con el nombre de **https-service** el cual tendra 1 archivo 
 
 > *https.service.ts*


```sh
 angugen -t module -n dashboard
 ```
 
 Este comando genera una carpeta con el nombre de **dashboard-module** el cual tendra 4 archivos
> *dashboard.component.html*
  
> *dashboard.component.ts*

> *dashboard.route.ts*

> *dashboard.module.ts*

**-w** Esta la opcion para crear la carpeta que contiene los archivos generados , si colocamos esta opcion en **false** entonces creara los archivos en el donde se ejecuto el comando.
 
 ## Generar con un JSON de configuracion
 
 ```sh
  angugen -f structure.json -p /app/src
  ```
  
 Genera una estructura de archivos tomando los datos de **structure.json** por defecto generara los archivos en el lugar donde se ejecuto el comando pero se puede pasar una nueva ruta utilizando la opcion **-p** pasandole la nueva ruta donde se generara los archivos. 
 
 **structure.json**
 
 ```sh
   [
     {
       "type":"component",
       "name":"profile",
       "withFolder":true
     },
     {
       "type":"module",
       "name":"dashboard",
       "treeFiles":[
         {
           "type":"component",
           "name":"users"
         },
         {
           "type":"component",
           "name":"login"
         },
         {
           "type":"service",
           "folderName":"services",
           "onlyFolder":true,
           "treeFiles":[
             {
               "type":"service",
               "name":"login",
               "withFolder":false
             },
             {
               "type":"service",
               "name":"auth",
               "withFolder":false
             }
           ]
         }
       ]
     }
   ]
   ```
Este ejemplo genera la siguiente estructura de archivos:

- **dashboard-component /**
    * profile.component.html
    * profile.component.ts
- **dashboard-module /**
    * **users-component /**
        * users.component.html
        * users.component.ts
    * **login-component /**
        * login.component.html
        * login.component.ts
    * **services /**
        * login.service.ts
        * auth.service.ts
    * dashboard.component.html
    * dashboard.component.ts
    * dashboard.route.ts
    * dashboard.module.ts


 