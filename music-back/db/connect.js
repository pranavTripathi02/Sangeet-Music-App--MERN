import { connect } from 'mongoose';

const connectDB = (url) => {
    connect(url)
        .then(() => {
            console.log('DB connected...');
        })
        .catch((err) => {
            console.log(err);
        });
};

export default connectDB;
