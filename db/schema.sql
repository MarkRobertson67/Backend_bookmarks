-- if our db already exists, drop it
DROP DATABASE IF EXISTS bookmarks_dev;

-- Create our Database
CREATE DATABASE bookmarks_dev;

-- Connect to the db
\c bookmarks_dev;

-- Create a table for our bookmarks
CREATE TABLE bookmarks (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 url TEXT,
 category TEXT,
 is_favorite BOOLEAN
);

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY,
--     email TEXT NOT NULL,
--     password TEXT NOT NULL
-- )
