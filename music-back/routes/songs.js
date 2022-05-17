const express = require('express');
const router = express.Router();
const {
  getAllSongs,
  addSong,
  getSong,
  updateSong,
  deleteSong,
  getArtists,
} = require('../controllers/songs');

router.route('/').get(getAllSongs).post(addSong).delete(deleteSong);
router.route('/artists').get(getArtists);
// router.route('/:singer').get(songsBySinger);
router.route('/:id').get(getSong).patch(updateSong);

module.exports = router;
