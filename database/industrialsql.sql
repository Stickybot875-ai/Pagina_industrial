-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-09-2025 a las 18:46:42
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `industrialsql`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE `estudiante` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `ApellidoPaterno` varchar(50) NOT NULL,
  `ApellidoMaterno` varchar(50) NOT NULL,
  `NumeroControl` int(9) NOT NULL,
  `Semestre` int(3) NOT NULL,
  `Taller` varchar(100) NOT NULL,
  `Nss` varchar(20) NOT NULL,
  `Correo` varchar(30) NOT NULL,
  `NombreEme` varchar(50) NOT NULL,
  `ApellidoPaternoEme` varchar(50) NOT NULL,
  `ApellidoMaternoEme` varchar(50) NOT NULL,
  `TelefonoEme` bigint(11) NOT NULL,
  `TallaPlayera` varchar(5) NOT NULL,
  `TallaChaleco` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`id`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `NumeroControl`, `Semestre`, `Taller`, `Nss`, `Correo`, `NombreEme`, `ApellidoPaternoEme`, `ApellidoMaternoEme`, `TelefonoEme`, `TallaPlayera`, `TallaChaleco`) VALUES
(1, 'DANIEL ANTONIO ', 'LOPEZ', 'MACIAS', 23150321, 6, 'M', '4217032112', 'DALOPEZMACIAS@GMAIL.COM', 'ANA CECILIA', 'MACIAS', 'DIAZ', 4492094745, '2EG', 'M'),
(2, 'DANIEL ANTONIO ', 'LOPEZ', 'MACIAS', 23150321, 6, 'G', '4217032112', 'DALOPEZMACIAS@GMAIL.COM', 'ANA CECILIA', 'MACIAS', 'DIAZ', 4492094745, 'G', 'M'),
(3, 'DANIEL ANTONIO ', 'LOPEZ', 'MACIAS', 23150321, 6, 'CH', '4217032112', 'CECI@GMAIL.COM', 'ANA CECILIA', 'MACIAS', 'DIAZ', 4492094745, 'CH', 'CH'),
(4, 'PATRICIO RAFAEL', 'CRUZ', 'SALOMON', 23150331, 57, 'Gestión de Proyectos con enfoque PMBOK y Liderazgo', '4217032112', 'AXEL@GMAIL.COM', 'ANA CECILIA', 'MACIAS', 'DIAZ', 4492094745, '2EG', 'G'),
(5, 'PATRICIO RAFAEL', 'CRUZ', 'SALOMON', 23150331, 57, 'Gestión de Proyectos con enfoque PMBOK y Liderazgo', '4217032112', 'AXEL@GMAIL.COM', 'ANA CECILIA', 'MACIAS', 'DIAZ', 4492094745, 'G', 'G'),
(6, 'PATRICIO RAFAEL', 'CRUZ', 'SALOMON', 23150331, 57, 'Gestión de Proyectos con enfoque PMBOK y Liderazgo', '4217032112', 'AXEL@GMAIL.COM', 'ANA CECILIA', 'MACIAS', 'DIAZ', 4492094745, 'G', 'G'),
(7, 'PATRICIO RAFAEL', 'CRUZ', 'SALOMON', 23150331, 57, 'Gestión de Proyectos con enfoque PMBOK y Liderazgo', '4217032112', 'AXEL@GMAIL.COM', 'ANA CECILIA', 'MACIAS', 'DIAZ', 4492094745, 'G', 'G'),
(8, 'PATRICIO RAFAEL', 'CRUZ', 'SALOMON', 23150331, 57, 'Gestión de Proyectos con enfoque PMBOK y Liderazgo', '4217032112', 'AXEL@GMAIL.COM', 'ANA CECILIA', 'MACIAS', 'DIAZ', 4492094745, 'G', 'G'),
(9, 'PATRICIO RAFAEL', 'CRUZ', 'SALOMON', 23150331, 57, 'Gestión de Proyectos con enfoque PMBOK y Liderazgo', '4217032112', 'AXEL@GMAIL.COM', 'ANA CECILIA', 'MACIAS', 'DIAZ', 4492094745, 'EG', 'G'),
(10, 'PATRICIO RAFAEL', 'CRUZ', 'SALOMON', 23150331, 57, 'Gestión de Proyectos con enfoque PMBOK y Liderazgo', '4217032112', 'AXEL@GMAIL.COM', 'ANA CECILIA', 'MACIAS', 'DIAZ', 4492094745, 'EG', 'G');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `externo`
--

CREATE TABLE `externo` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `ApellidoPaterno` varchar(50) NOT NULL,
  `ApellidoMaterno` varchar(50) NOT NULL,
  `numeroControl` varchar(30) NOT NULL,
  `Generacion` varchar(10) DEFAULT NULL,
  `Telefono` bigint(11) NOT NULL,
  `Correo` varchar(30) NOT NULL,
  `TallaPlayera` varchar(5) NOT NULL,
  `TallaChaleco` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `externo`
--

INSERT INTO `externo` (`id`, `Nombre`, `ApellidoPaterno`, `ApellidoMaterno`, `numeroControl`, `Generacion`, `Telefono`, `Correo`, `TallaPlayera`, `TallaChaleco`) VALUES
(1, 'DANIEL ANTONIO ', 'LOPEZ', 'MACIAS', '', '56', 4492094745, 'DALOPEZMACIAS@GMAIL.COM', 'G', 'G'),
(2, 'DANIEL ANTONIO  ', 'LOPEZ  ', 'MACIAS ', 'EXT0000050 ', '56 ', 4497530069, 'DALOPEZMACIAS@GMAIL.COM', 'M', 'CH'),
(3, 'IVANNA SOPHIA ', 'CALZADA', 'MARTINEZ', 'EXT0000052', '56', 4492094745, 'IVANNA.SOPHIACM@GMAIL.COM', 'CH', 'CH'),
(4, 'JUAN', 'PEREZ', 'GUZMAN', 'EXT0000055', '57', 4497530068, 'PEREZGUZMA12@GMAIL.COM', 'M', 'M'),
(5, 'DANIEL ANTONIO ', 'LOPEZ', 'MACIAS', 'EXT0000056', '56', 4497530069, 'AMILCAR@GMAIL.COM', 'EG', 'G');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `talleres`
--

CREATE TABLE `talleres` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Horario` varchar(10) NOT NULL,
  `Cupo` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `talleres`
--

INSERT INTO `talleres` (`id`, `Nombre`, `Horario`, `Cupo`) VALUES
(1, 'Gestión de Proyectos con enfoque PMBOK y Liderazgo', '15 a 19', 1),
(2, 'Kit de herramientas del profesional: de la teoría ', '15 a 19', 0),
(3, 'Control de Calidad', '15 a 19', 0),
(4, 'Lean Manufacturing', '15 a 19', 0),
(5, 'Cadena de suministro; planeación de producción y m', '15 a 19', 0),
(6, 'Lean manufacturing en taller de mantenimiento auto', '15 a 19', 0),
(7, 'Mejora continua y gestión de project management', '15 a 19', 0),
(8, 'Calidad en la industria automotriz', '15 a 19', 0),
(9, 'Los nuevos productos en la industria / Configuraci', '15 a 19', 0),
(10, '7 herramientas de calidad', '15 a 19', 0),
(11, 'Cadena de suministros: la logística como clave en ', '15 a 19', 0),
(12, 'Mejora continua en la industria textil', '15 a 19', 0),
(13, 'Google apps para ingenieros industriales: Automati', '15 a 19', 0),
(14, 'Calidad en Acción: Estrategias para la Competitivi', '15 a 19', 0),
(15, 'Evaluación de proyectos y proyectos de inversión', '15 a 19', 0),
(16, 'Core Tools: Desarrollo de Procesos y Productos ase', '15 a 19', 0),
(17, 'Estandarización e Impacto de Partes Eléctricas en ', '15 a 19', 0),
(18, 'Planeación y supervisión de proyectos', '15 a 19', 0),
(19, 'Educación Financiera', '9 a 13', 0),
(20, 'Liderazgo AI', '9 a 13', 0),
(21, 'Resolución de problemas por medio de la metodologí', '9 a 13', 0),
(22, 'Resistencia al cambio', '9 a 13', 0),
(23, 'Los nuevos retos y paradigmas del ingeniero indust', '9 a 13', 0),
(24, 'AMEF & CP AIAG-VDA primera edición', '9 a 13', 0),
(25, 'Innovación y cultura de mejora', '9 a 13', 0),
(26, 'Monozukuri y Kaizen: El arte de crear valor con ef', '9 a 13', 0),
(27, 'Procesos Clave en la Industria Automotriz con enfo', '9 a 13', 0),
(28, 'Procesos que transforman: ¿Cómo el ingeniero indus', '9 a 13', 0),
(29, 'Logística 4.0: La Ingeniería detrás de Amazon', '9 a 13', 0),
(30, 'Mejora en la Cadena de Valor en los Productos y Se', '9 a 13', 0),
(31, 'El rol del Ingeniero Industrial en la Industria 4.', '9 a 13', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `curp` varchar(18) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `numeroControl` varchar(12) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `curp`, `correo`, `password`, `numeroControl`, `created_at`) VALUES
(4, 'daniel', 'LOMD040515HASPCNA1', 'DALOPEZMACIAS@GMAIL.COM', 'e3770f61b9f89849ef2fe998bd5c93d46e25ff05adf1f9af5723be4dacadfb4c', '', '2025-09-11 03:31:30'),
(5, 'Juan', 'PEGA010101HDFRRN01', 'juan.perez@email.com', '$2b$10$EhKw47leXtx5S3wr4fATNuW2pCnR8ackR5tEJYSWvFs51nXeUtTK2', '', '2025-09-11 06:14:22'),
(6, 'Edson Cristian de la Rosa Martinez', 'ROME041003HASSRDA2', 'edsondelarosax123@gmail.com', 'ROME0410', '', '2025-09-11 17:29:23'),
(7, 'DANIEL ANTONIO LOPEZ MACIAS', 'LOMD040515HASPCNA1', 'DALOPEZMACIAS@GMAIL.COM', 'LOMD0405', 'EXT0000050', '2025-09-13 01:09:42'),
(8, 'MIGUEL ANGEL CISNEROS VAZQUEZ', 'LOMD040515HASPCNA1', 'MIKE@GMAIL.COM', 'LOMD0405', '', '2025-09-13 02:52:06'),
(9, 'karla luisa diaz de leon', 'CAMI041201MASLRVA4', 'ivanna.sophiacm@gmail.com', 'CAMI0412', '', '2025-09-13 04:57:37'),
(10, 'VICTOR ANTONIO HERNANDEZ GALINDO', 'VICT040515HASPCNA1', 'edsondelarosax123@gmail.com', 'VICT0405', 'EXT0000048', '2025-09-13 08:13:02'),
(11, 'ANA CECILA', 'ROME041003HASSRDA2', 'CECI@GMAIL.COM', 'ROME0410', 'EXT0000053', '2025-09-14 23:05:51'),
(12, 'IVANNA SOPHIA CALZADA MARTINEZ', 'CAMI041201MASLRVA4', 'IVANNA.SOPHIACM@GMAIL.COM', 'CAMI0412', 'EXT0000052', '2025-09-15 06:42:18'),
(13, 'EDSON CRISTIAN DE LA ROSA MARTINEZ', 'ROME041003HASSRDA2', 'EDSONDELAROSAX123@GMAIL.COM', 'ROME0410', 'EXT0000048', '2025-09-15 17:57:28'),
(14, 'DANIEL ANTONIO LOPEZ MACIAS', 'LOMD040515HASPCNA1', 'DALOPEZMACIAS@GMAIL.COM', 'LOMD0405', 'EXT0000050', '2025-09-15 17:58:16'),
(15, 'MIGUEL ANGEL CISNEROS VAZQUEZ', 'MIGE040515HASPCNA1', 'MIKE@GMAIL.COM', 'MIGE0405', 'EXT0000051', '2025-09-15 17:58:55'),
(16, 'MIGUEL ANGEL CISNEROS VAZQUEZ', 'LOMD040515HASASDFA', 'AXEL@GMAIL.COM', 'LOMD0405', 'EXT0000054', '2025-09-15 18:12:25'),
(17, 'JUAN PEREZ GUZMAN', 'POXD040515HASPCNA5', 'PEREZGUZMA12@GMAIL.COM', 'POXD0405', 'EXT0000055', '2025-09-17 16:40:37'),
(18, 'AMILCAR SOLDEVILLA LOPEZ', 'LOMD040515HASPCNA1', 'AMILCAR@GMAIL.COM', 'LOMD0405', 'EXT0000056', '2025-09-17 18:34:45');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `validacion`
--

CREATE TABLE `validacion` (
  `id` int(11) NOT NULL,
  `NumeroControl` varchar(20) NOT NULL,
  `Validado` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `validacion`
--

INSERT INTO `validacion` (`id`, `NumeroControl`, `Validado`) VALUES
(1, '23150321', 1),
(2, 'EXT0000050', 1),
(3, 'EXT0000053', 1),
(4, 'EXT0000052', 1),
(5, '23150331', 1),
(6, '23150331', 1),
(7, '23150331', 1),
(8, '23150331', 1),
(9, '23150331', 1),
(10, '23150331', 1),
(11, '23150331', 1),
(12, 'EXT0000055', 1),
(13, 'EXT0000056', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `externo`
--
ALTER TABLE `externo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `talleres`
--
ALTER TABLE `talleres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `validacion`
--
ALTER TABLE `validacion`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `estudiante`
--
ALTER TABLE `estudiante`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `externo`
--
ALTER TABLE `externo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `talleres`
--
ALTER TABLE `talleres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `validacion`
--
ALTER TABLE `validacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
