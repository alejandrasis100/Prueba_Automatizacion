# SauceDemo Automation Project

Proyecto de automatización de pruebas para SauceDemo usando Playwright con TypeScript y Page Object Model.

## Configuración del Proyecto

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Instalar dependencias
npm install

# Instalar navegadores de Playwright
npm run install:browsers
```

## Estructura del Proyecto

```
├── pages/                 # Page Object Models
│   ├── LoginPage.ts      # Página de login
│   └── InventoryPage.ts  # Página de inventario
├── tests/                # Archivos de pruebas
│   ├── login.spec.ts     # Pruebas de login positivas
│   └── login-negative.spec.ts # Pruebas de login negativas
├── utils/                # Utilidades y datos de prueba
│   └── TestData.ts       # Datos de prueba
├── playwright.config.ts  # Configuración de Playwright
└── tsconfig.json        # Configuración de TypeScript
```

## Comandos Disponibles

### Ejecutar todas las pruebas
```bash
npm test
```

### Ejecutar pruebas en modo visual (headed)
```bash
npm run test:headed
```

### Ejecutar pruebas solo en Chrome
```bash
npm run test:chrome
```

### Ejecutar pruebas solo en emulador Android
```bash
npm run test:android
```

### Ejecutar pruebas con interfaz gráfica
```bash
npm run test:ui
```

### Ver reporte de resultados
```bash
npm run report
```

## Casos de Prueba Implementados

### Pruebas Positivas (login.spec.ts)
1. **Login exitoso con standard_user**: Verifica login y que el icono del carrito esté visible
2. **Funcionalidad del carrito**: Verifica que el carrito sea funcional después del login
3. **Elementos de la página de login**: Verifica que todos los elementos estén visibles

### Pruebas Negativas (login-negative.spec.ts)
1. **Usuario bloqueado**: Prueba con locked_out_user
2. **Credenciales inválidas**: Prueba con credenciales incorrectas
3. **Credenciales vacías**: Prueba sin ingresar datos

## Configuración de Navegadores

El proyecto está configurado para ejecutarse en:
- **Chrome Desktop**: Resolución 1280x720
- **Android Emulator**: Pixel 5 con configuración móvil

## Características del Framework

- **Page Object Model**: Separación clara entre lógica de pruebas y elementos de página
- **TypeScript**: Tipado fuerte para mejor mantenibilidad
- **Configuración multi-navegador**: Chrome y Android
- **Screenshots automáticos**: En caso de fallos
- **Videos**: Grabación en caso de fallos
- **Reportes HTML**: Reportes detallados de ejecución
- **Datos de prueba centralizados**: En utils/TestData.ts

## Usuario de Prueba

- **Usuario**: standard_user
- **Contraseña**: secret_sauce

## Verificaciones Principales

✅ Login exitoso con credenciales válidas
✅ Redirección a página de inventario
✅ Visibilidad del icono del carrito de compras
✅ Carga correcta de productos
✅ Funcionalidad del carrito