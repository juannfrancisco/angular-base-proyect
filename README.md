# Proyecto Base Administracion WEB

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.
, bootstrap@4.4.1 y ng-bootstrap@6.0.3

## Development server

Ejecuta `ng serve` para iniciar el servidor web. Navega a `http://localhost:4200/`. La aplicación se recargara automaticamente al realizarse un cambio.


## Components Structure 

```
public ->
    InicioComponent
    LoginComponent
    RegistroComponent
    commons ->
        HeaderPublicComponent
        FooterPublicComponent
private ->
    InicioPrivadoComponent
    BienvenidoComponent
    usuarios ->
        UsuariosComponent
        UsuarioCrearComponent
        UsuarioEditarComponent

```


## Nuevo Componentes 

Agregar componentes publicos: `ng generate component components/public/ComponentName`.

Agregar componentes privados: `ng generate component components/private/ComponentName`.





## Build

Ejecutar `ng build` para construir el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`. Use el flag `--prod` para una compilación de producción.
