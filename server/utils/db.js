// import dotenv from 'dotenv';
// import mongoose from 'mongoose';

// dotenv.config();

// const dbUrl = process.env.MONGODB_URL;

// const connectDB = async () => {
//     try {
//         await mongoose.connect(dbUrl).then((data) => {
//             console.log(`Database connected with ${data.connection.host}`)
//         })
//     } catch (error) {
//         console.log(error.message);
//         setTimeout(connectDB, 5000);
//     }
// }

// export default connectDB;