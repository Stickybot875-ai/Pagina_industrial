-- ============================================================
-- Migración: Panel de Administración - Semanas y Visitas
-- Ejecutar este script en la BD industrialsql
-- ============================================================

-- --------------------------------------------------------
-- Tabla: admins (4 cuentas para encargados)
-- Contraseña por defecto: Admin2025!
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `admins` (`nombre`, `correo`, `password`) VALUES
('Encargado 1', 'encargado1@ita.edu.mx', '$2b$10$DCshvgx5LogXT62D81wBzO3NotFHNl1RIACuvgEXxONTGEWTdvcIe'),
('Encargado 2', 'encargado2@ita.edu.mx', '$2b$10$ZZHgZuF4UQ1a9XsasNY5uenanT9KpyNC3eYaXoHmiwn5GnlUcIZwG'),
('Encargado 3', 'encargado3@ita.edu.mx', '$2b$10$OvxVDuGbu5IA8/nENuBjb.7jkPxHTOcvJi3vEOZ7MOJ8CPq0BlTZ.'),
('Encargado 4', 'encargado4@ita.edu.mx', '$2b$10$iq5z.MnGotZ0srGxrVZvrOAULq1NhzMcpxMdGr7WQPgIqIotUZ9S.');
-- Contraseña por defecto para todos: Admin2025!

-- --------------------------------------------------------
-- Tabla: semanas_tecnologicas
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `semanas_tecnologicas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `tema` varchar(100) NOT NULL,
  `color` varchar(10) NOT NULL DEFAULT '#800020',
  `actividades` text NOT NULL COMMENT 'JSON array de strings',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Datos iniciales (migrados del hardcode anterior)
INSERT INTO `semanas_tecnologicas` (`titulo`, `fecha`, `tema`, `color`, `actividades`) VALUES
('Semana Tecnológica 2024-1', 'Febrero 2024', 'Manufactura Inteligente', '#C1272D',
 '["Conferencia magistral sobre Automatización Industrial","Taller de robótica colaborativa","Concurso de proyectos estudiantiles","Visita virtual a planta Toyota"]'),
('Semana Tecnológica 2023-2', 'Noviembre 2023', 'Sustentabilidad en la Industria', '#2E7D32',
 '["Panel de expertos en energías renovables","Exposición de proyectos de eficiencia energética","Conferencia sobre certificaciones ISO 14001"]'),
('Semana Tecnológica 2023-1', 'Marzo 2023', 'Calidad e Innovación', '#1565C0',
 '["Taller Six Sigma","Conferencia de mejora continua","Presentación de tesis destacadas"]');

-- --------------------------------------------------------
-- Tabla: visitas_industriales
-- --------------------------------------------------------
CREATE TABLE IF NOT EXISTS `visitas_industriales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) NOT NULL,
  `empresa` varchar(100) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  `actividades` text NOT NULL COMMENT 'JSON array de strings',
  `color` varchar(10) NOT NULL DEFAULT '#800020',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
