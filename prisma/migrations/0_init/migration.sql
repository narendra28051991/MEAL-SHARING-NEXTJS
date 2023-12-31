-- CreateTable
CREATE TABLE `meal` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME(0) NOT NULL,
    `max_reservations` INTEGER NOT NULL,
    `price` DECIMAL(10, 0) NOT NULL,
    `created_date` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservation` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `number_of_guests` INTEGER NOT NULL,
    `meal_id` INTEGER UNSIGNED NOT NULL,
    `created_date` DATE NOT NULL,
    `contact_number` VARCHAR(255) NOT NULL,
    `contact_name` VARCHAR(255) NOT NULL,
    `contact_email` VARCHAR(255) NOT NULL,

    INDEX `fk_meal_reservation`(`meal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `review` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `meal_id` INTEGER UNSIGNED NOT NULL,
    `stars` INTEGER NOT NULL,
    `created_date` DATE NOT NULL,

    INDEX `fk_meal_review`(`meal_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `reservation` ADD CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

