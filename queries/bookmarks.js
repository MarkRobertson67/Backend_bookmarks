
const db = require("../db/dbConfig");

// Index query
const getAllBookmarks = async () => {
    try {
        const allBookmarks = await db.any("SELECT * FROM bookmarks");
        return allBookmarks;
      } catch (error) {
        return error;
      }
};

// Show query
const getABookmark = async (id) => {
    try {
        const bookmark = await db.one("SELECT * FROM bookmarks WHERE id=$1", id);
        return bookmark;
      } catch (error) {
        return error;
      }
};

// Create query
const createBookmark = async (bookmarkToAdd) => {
    const { name, url, category, is_favorite } = bookmarkToAdd;

    try {
        const newBookmark = await db.one
            ("INSERT INTO bookmarks (name, url, category, is_favorite) VALUES ($1, $2, $3, $4) RETURNING *",
                [name, url, category, is_favorite]);
        return newBookmark;
    } catch (error) {
        return error;
    }
};


// Delete query
const deleteBookmark = async (id) => {
    try {
        const deletedBookmark = await db.one("DELETE FROM bookmarks WHERE id=$1 RETURNING *", id)
        return deletedBookmark
    } catch (error) {
        return error
    }
}

//Update query
const updateBookmark = async (id, bookmark) => {
    const { name, url, category, is_favorite } = bookmark;

    try {
        const updatedBookmark = await db.one("UPDATE bookmarks SET name=$1, url=$2, category=$3, is_favorite=$4 WHERE id=$5 RETURNING *", [name, url, category, is_favorite, id]);
        return updatedBookmark
    } catch (error) {
        return error;
    };
  };

module.exports = {
    getAllBookmarks,
    getABookmark,
    createBookmark, 
    deleteBookmark,
    updateBookmark
};