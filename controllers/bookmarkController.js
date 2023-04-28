
const express = require("express");
const bookmarks = express.Router();
const { getAllBookmarks, getABookmark, createBookmark, deleteBookmark, updateBookmark } = require("../queries/bookmarks");
const {checkRequest} = require('../validations/checkBookmarks') 


// INDEX route
bookmarks.get("/", async (req, res) => {
    const allBookmarks = await getAllBookmarks();

    if (allBookmarks) {
        res.status(202).json(allBookmarks);
      } else {
        res.status(500).json({ error: "server error" });
      }
});

// Show route
bookmarks.get("/:id", async (req, res) => {
    const { id } = req.params;
    const bookmark = await getABookmark(id);

    if (bookmark) {
        res.status(202).json(bookmark);
      } else {
        res.status(500).json({ error: "server error" });
      }
});

// CREATE Route
bookmarks.post('/', async (req, res) => {
  const newBookmark = req.body;

  try {
    const addedBookmark = await createBookmark(newBookmark)
    res.status(200).json(addedBookmark)
  } catch (error) {
    res.status(400).json({ error: error})
  }
})

// Delete route
bookmarks.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBookmark = await deleteBookmark(id)
    res.status(200).json(deletedBookmark)
  } catch (error) {
    res.status(400).json({ error: error})
  }
})

//UPDATE route
bookmarks.put("/:id", checkRequest, (req, res, next) => {

}, async (req, res) => {
    const { id } = req.params;
    const { body} = req;

  try {
  const updatedBookmark = await updateBookmark(id, body);
  res.status(200).json(updatedBookmark);
  } catch (error) {
    res.status(400).json({ error: error})
  }
});


//   res.json({ status: "ok" });

module.exports = bookmarks