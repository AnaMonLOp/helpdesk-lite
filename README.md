# HelpDesk Lite - Sistema de Gestión de Tickets de Soporte Técnico

Aplicación web frontend que permite registrar, dar seguimiento y administrar el ciclo de vida de tickets de soporte técnico, desarrollada bajo la metodología GitFlow.

## Funcionalidades Principales
* **Creación de Tickets:** Formulario dinámico para registrar solicitudes con título, descripción, categoría y prioridad.
* **Generación de Folio Automático:** Asignación de identificadores secuenciales únicos (ej. `HD-0001`).
* **Búsqueda en Tiempo Real:** Filtrado instantáneo por folio, título o contenido de la descripción.
* **Filtros Combinados:** Selección simultánea por Estado (`Nuevo`, `En proceso`, `Resuelto`, `Cerrado`) y Prioridad (`Baja`, `Media`, `Alta`, `Crítica`).
* **Control de Flujo y Estados:** Transiciones restringidas mediante botones contextuales (`Nuevo` → `En proceso` → `Resuelto` → `Cerrado`).
* **Dashboard de Métricas:** Indicadores en tiempo real sobre el volumen de tickets por estado.
* **Persistencia Local:** Almacenamiento automático en `localStorage` para conservar la información tras recargar la página.

## Tecnologías utilizadas
- HTML5 Semántico
- CSS3 Responsive
- JavaScript Vanilla
- LocalStorage para persistencia
- Git & GitFlow

## Cómo Ejecutar el Proyecto
1. **Clonar o Descargar el Repositorio:**
   ```bash
   git clone <https://github.com/AnaMonLOp/helpdesk-lite.git>
   cd helpdesk-lite

## Autor
✨ Ana Laura Monroy López.