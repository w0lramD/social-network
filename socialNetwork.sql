
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users
(
  id SERIAL primary key,
  first  VARCHAR(255) NOT NULL,
  last VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  imageUrl VARCHAR(255),
  biography TEXT
);
