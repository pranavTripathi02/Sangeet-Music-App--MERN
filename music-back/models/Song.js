import { Schema, model } from 'mongoose';

const SongSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title'],
        },
        song_url: {
            type: String,
            required: [true, 'Please provide a title'],
        },
        artist: {
            type: String,
            required: [true, 'Please provide a title'],
        },
        artist_img: {
            type: String,
            // enum:[]
            // required: [true, 'Please provide a title'],
        },
    },
    { timestamps: true }
);

export default model('Song', SongSchema);
