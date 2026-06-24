# Visitas Comerciales MDA - Guia de instalacion

## Que hace esta app

App separada de "Salas de Reuniones" pero que comparte el mismo calendario central (asistenteti@mdai.cl), las mismas Sala A y Sala B, y el mismo anti-solapamiento.

### Reglas de horario implementadas

- **Lunes, Miercoles, Viernes de 9:30 a 13:30**: exclusivo para los 6 ejecutivos comerciales autorizados. Cualquier otra persona que intente reservar en ese rango recibe el mensaje de bloqueo.
- **Lunes de 11:00 a 12:00**: bloqueado para todos (reunion interna del equipo), incluso para los vendedores autorizados.
- **Fuera de esos horarios**: cualquier persona de la empresa con cuenta @mdai.cl puede reservar Sala A o Sala B normalmente.

### Ejecutivos comerciales autorizados (horario exclusivo)

- Diana Monsalve - dmonsalve@externomdai.cl
- Claudio Leiva - cleiva@externomdai.cl
- Jorge Diaz - jdiaz@externomdai.cl
- Isabel Ormazabal - iormazabal@externo.mdai.cl
- Jessica Jorquera - jj@externomdai.cl
- Soledad Gomez - sgomez@externomdai.cl

### Copia obligatoria en cada visita

Todas las visitas creadas agregan automaticamente como invitados opcionales a:
- mbustamente@mdai.cl
- ssoto@mdai.cl
- lmenezes@mdai.cl

## Integracion con la app principal

Esta app escribe y lee del MISMO calendario central que "Salas de Reuniones". Esto significa:

- Una visita creada aqui aparece automaticamente en la app principal de Salas de Reuniones (y viceversa)
- El anti-solapamiento es compartido: si alguien reservo Sala A en la app principal, esta app lo respeta y no permite doble reserva
- En la barra superior hay un link directo "Ir a Salas de Reuniones" para saltar entre ambas apps

## Pasos para publicar

1. Sube estos archivos a un repositorio nuevo en GitHub (ej. `visitas-mda`)
2. Activa GitHub Pages: Settings - Pages - Branch main - Save
3. Copia la URL que entrega GitHub Pages
4. Ve a Azure Portal - SalasApp (la misma app registrada, MISMO Client ID) - Autenticacion
5. Agrega esa nueva URL como URI de redireccion adicional tipo SPA
6. Listo - la app ya puede autenticar usuarios

No necesitas crear un nuevo registro de Azure AD; esta app reutiliza el mismo Client ID y Tenant ID que la app de Salas de Reuniones, por eso basta con agregar la URL nueva como URI de redireccion adicional.

## Editar la lista de vendedores autorizados

Si en el futuro cambia la lista, hay que modificar el arreglo `VENDEDORES_AUTORIZADOS` dentro del codigo (linea ~30 del script). Por ahora se mantiene fija; si necesitas cambios, pidemelo y genero el archivo actualizado.

## Domain lock

Igual que la app principal, el codigo solo funciona en el dominio configurado (alacalufexd.github.io). Si se copia a otro servidor, queda inutilizado automaticamente.
