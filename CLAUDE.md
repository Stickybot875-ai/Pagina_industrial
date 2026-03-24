# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PAIndustrial is a web application for the 50th anniversary event of the Industrial Engineering department at ITA (Instituto Tecnológico de Aguascalientes). It handles workshop registration, payment validation, and attendee management for both students and external participants.

## Development Commands

### Backend (run from `backend/`)
```bash
npm install          # Install dependencies
npm run dev          # Start with nodemon (hot reload)
npm start            # Start with node
```

### Frontend (run from `frontend/`)
```bash
npm install          # Install dependencies
npm run dev          # Start Vite dev server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Root level
```bash
npm install          # Installs exceljs (root-level dependency)
```

## Environment Setup

The backend requires a `.env` file in `backend/` with:
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=
DB_NAME=industrialsql
PORT=5001
```

Database: Import `industrialsql.sql` into MySQL/MariaDB (designed for XAMPP). The schema has tables: `estudiante`, `externo`, `talleres`, `usuarios`, `validacion`.

## Architecture

**Monorepo with two separate Node projects:**

- `backend/` — Express.js REST API (ES modules, port 5001)
- `frontend/` — React 19 + Vite SPA (React Router v7)

### Backend API Endpoints (`backend/server.js`)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/loginAlumno` | Student login — validates via external payment API |
| GET | `/api/login` | External user login (email + password + control number) |
| POST | `/api/alumno` | Register a student for a workshop |
| POST | `/api/externo` | Register an external attendee |
| POST | `/api/enviar` | Register new external user + call external payment API |
| GET | `/api/exportar-excel` | Export `estudiante` and `externo` tables as `.xlsx` |

The backend integrates with an external payment API at `ciapagos.aguascalientes.tecnm.mx` to validate payments and retrieve order info.

### Frontend Structure

- **Routes** (defined in `App.jsx`):
  - `/` → `Home` page (landing page with all sections)
  - `/talleres-industrial` → Workshop catalog page

- **`frontend/src/pages/`** — Page-level components (`Home.jsx`, `talleres.jsx`)
- **`frontend/src/sections/`** — Section components composed in `Home.jsx`: `Inicio`, `Historia`, `ContadorRegresivo`, `Legado`, `ListaEventos`, `Ponentes`, `Registro`, `Contacto`
- **`frontend/src/ComponentesCSS/`** — Component-specific CSS files

### Key Data Flow

1. Users log in via their student control number or external credentials.
2. Login endpoints check payment status against the external API.
3. If payment is validated and `validacion` table has no entry, the registration form is shown.
4. On form submit, data is inserted into `estudiante` or `externo` tables and a row is added to `validacion`.
5. Workshop capacity is tracked in the `talleres` table (max 25 per workshop).

### DB Tables Summary
- `estudiante` — registered students (with emergency contact, workshop, sizes)
- `externo` — registered external attendees
- `usuarios` — external user accounts (correo + password + numeroControl)
- `talleres` — workshops with current enrollment count (`cupo`)
- `validacion` — tracks whether a control number has completed registration
