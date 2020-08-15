-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 11-08-2020 a las 00:02:21
-- Versión del servidor: 10.3.22-MariaDB-0+deb10u1
-- Versión de PHP: 7.3.19-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `code`) VALUES
(1, 'clinica', '277dsbe27132b132173gydb213xsads'),
(2, 'hogar', 'pgonmklmgimfimakfmioamdamsdowek'),
(3, 'comida', 'sadsa1312321321j3jx3ni21j3xi213'),
(4, 'electrodomesticos', 'aklmndsakdn12321mn2kn2n3k213212');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoices`
--

CREATE TABLE `invoices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `quantity_product_sold` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `IVA` double(8,2) NOT NULL,
  `sub_total` double(8,2) NOT NULL,
  `total` double(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(37, '2014_10_12_000000_create_users_table', 1),
(38, '2020_07_26_203104_create_password_recovers_table', 1),
(39, '2020_08_07_040707_create_providers_table', 1),
(40, '2020_08_07_041002_create_categories_table', 1),
(41, '2020_08_07_041046_create_taxes_table', 1),
(42, '2020_08_07_041949_create_products_table', 1),
(43, '2020_08_07_042602_create_invoices_table', 1),
(44, '2020_08_07_043219_create_products__invoices_table', 1),
(45, '2020_08_07_044434_add_foreings_id_to_products_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_recovers`
--

CREATE TABLE `password_recovers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `unit_price` double(8,2) NOT NULL,
  `quantity` int(11) NOT NULL,
  `provider_id` bigint(20) UNSIGNED DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `tax_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `description`, `unit_price`, `quantity`, `provider_id`, `category_id`, `tax_id`) VALUES
(1, 'neverra electrolux mediana', 5.99, 150, 3, 4, 4),
(2, 'carne', 10.99, 200, 6, 3, 4),
(3, 'crema dental 250gr', 3.99, 250, 5, 2, 1),
(4, 'camisa amarilla', 5.99, 100, 4, 2, 3),
(5, 'camisa verde', 6.99, 100, 4, 2, 3),
(6, 'remedio', 10.99, 100, 6, 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products__invoices`
--

CREATE TABLE `products__invoices` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED DEFAULT NULL,
  `invoice_id` bigint(20) UNSIGNED DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `providers`
--

CREATE TABLE `providers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rif` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `providers`
--

INSERT INTO `providers` (`id`, `name`, `address`, `phone`, `email`, `rif`) VALUES
(1, 'suavitel', 'suavitel1234 calle siempre viva', '+534149017184', 'suavitel1234@gmail.com', 'r-235331234521'),
(2, 'perla', 'perla1234 calle nunca viva', '+534149017184', 'perla1234@gmail.com', 'r-25641258983'),
(3, 'Electrolu', 'Electrolu1234 calle siempre viva', '+534149017184', 'Electrolu1234@gmail.com', 'r-2354157895'),
(4, 'lacoste', 'lacoste1234 calle siempre viva', '+534149017184', 'lacoste1234@gmail.com', 'r-98564212854'),
(5, 'colgate', 'colgate1234 calle siempre viva', '+534149017184', 'colgate1234@gmail.com', 'r-69851745896'),
(6, 'family farm', 'family farm1234 calle siempre viva', '+534149017184', 'familyfarm1234@gmail.com', 'r-98568745236');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `taxes`
--

CREATE TABLE `taxes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rate_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tax_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` double(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `taxes`
--

INSERT INTO `taxes` (`id`, `rate_type`, `tax_name`, `value`) VALUES
(1, '0', 'Exento', 0.00),
(2, '1', 'IVA G', 0.12),
(3, '2', 'IVA R', 0.08),
(4, '3', 'IVA A', 0.22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `identification_card` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `identification_card`, `phone`, `email`, `password`) VALUES
(1, 'gabriel', 'viloria', '27167028', '04149017184', 'admin@gmail.com', '$2y$10$vxTHeuwAJyhFPiYNVXZVveP9FCsjAVB/.Aoq..Hv63d/prSxxcVFm'),
(2, 'Luisa Price', 'Mr. Juston Mills Sr.', '6519330', '164165466', 'qmarks@example.com', '$2y$10$BtTNPxoDFSIgE0vTzqeAhu0NfPX7JJkiGWQ2y5GhkbV0YYoDELhRy'),
(3, 'Delores Hirthe', 'Edmund Huel Jr.', '3770798', '836699937', 'joe.price@example.net', '$2y$10$OcUE7n3kILxUkJLl2JIaGuG1u1bthBY9Mz4LwEOg1nHy0S9iazDMe'),
(4, 'Dr. Bradley Herman', 'Vivienne Crist Jr.', '9519376', '300049016', 'raleigh95@example.org', '$2y$10$8txGf63fOoulTcSLPae4ueGQHS2U259diGoTvuGTwIjGoY1O.qZkG'),
(5, 'Jasen Bogisich', 'Dagmar Turner', '8367363', '294012319', 'bergnaum.ruthe@example.net', '$2y$10$jE7vfFN42DPNsG8JCzDJYOCO9DIcxxobPxv7qwZnYFXqrP6jlDzam'),
(6, 'Alice Bogisich', 'Vanessa D\'Amore', '30265', '599336147', 'pmcglynn@example.org', '$2y$10$T7CmTc0JmkdahIx9Dq5BZenQGpM1tXlupEzx/ZzTwwvNIH3oDf9y2'),
(7, 'Nayeli Shanahan PhD', 'Chelsea Johnson', '1575380', '750714575', 'arno.padberg@example.net', '$2y$10$.pmzFzhm3SYOGV5ArtzGv.c3OBaOMgKdq5.oTFzouOXwPkJbhp59.'),
(8, 'Gerardo Kuvalis', 'Mrs. Aliza Hudson', '8973374', '131106224', 'buckridge.lazaro@example.net', '$2y$10$MRQwULcyyVSQVwQxmWuvbuvqWI2UqfvYFZaFZY1UQPTIYswdTAAAe'),
(9, 'Silas Muller', 'Mrs. Emmy Watsica', '7431103', '122746046', 'deonte.mueller@example.net', '$2y$10$qZnS7AtGDvK/p0YYf2L0BOHG75ExNdLY6ucTCjT/jbYAs47HYwP1a'),
(10, 'Prof. Gavin Beer MD', 'Mrs. Willa Grady', '2805243', '39279956', 'cprohaska@example.com', '$2y$10$giyjpHrEpxbP6MjOwrFpQ.L2LUiw58LChNvyvFTd680b.P1ScELBq'),
(11, 'Angus Bergstrom', 'Adeline Schroeder', '4596119', '814400453', 'amraz@example.com', '$2y$10$g2xxsdePyQ1DS8r3bBxPseg9q99V0R5h5qUf1D3TwqCEo8V6TZWlS');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_recovers`
--
ALTER TABLE `password_recovers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `password_recovers_email_index` (`email`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_provider_id_foreign` (`provider_id`),
  ADD KEY `products_category_id_foreign` (`category_id`),
  ADD KEY `products_tax_id_foreign` (`tax_id`);

--
-- Indices de la tabla `products__invoices`
--
ALTER TABLE `products__invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products__invoices_product_id_foreign` (`product_id`),
  ADD KEY `products__invoices_invoice_id_foreign` (`invoice_id`),
  ADD KEY `products__invoices_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `providers_email_unique` (`email`);

--
-- Indices de la tabla `taxes`
--
ALTER TABLE `taxes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `password_recovers`
--
ALTER TABLE `password_recovers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `products__invoices`
--
ALTER TABLE `products__invoices`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `providers`
--
ALTER TABLE `providers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `taxes`
--
ALTER TABLE `taxes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_provider_id_foreign` FOREIGN KEY (`provider_id`) REFERENCES `providers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_tax_id_foreign` FOREIGN KEY (`tax_id`) REFERENCES `taxes` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `products__invoices`
--
ALTER TABLE `products__invoices`
  ADD CONSTRAINT `products__invoices_invoice_id_foreign` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products__invoices_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products__invoices_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
