import { Router } from 'express';
const router = Router();
import { getAllSongs, addSong, getSong, updateSong, deleteSong, getArtists } from '../controllers/songs.js';

router.route('/').get(getAllSongs).post(addSong).delete(deleteSong);
router.route('/artists').get(getArtists);
// router.route('/:singer').get(songsBySinger);
router.route('/:id').get(getSong).patch(updateSong);

export default router;
