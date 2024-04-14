import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import doctorRoute from './Routes/doctor.js';
import reviewRoute from './Routes/review.js';
import bookingRoute from './Routes/booking.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true
}

app.get('/', (req, res) => {
    res.send("Api is working");
});


// database connection
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
  }

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute); //domain/api/v1/auth/register
app.use('/api/v1/users', userRoute); //domain/api/v1/auth/user
app.use('/api/v1/doctors', doctorRoute); //domain/api/v1/auth/doctor
app.use('/api/v1/reviews', reviewRoute); //domain/api/v1/auth/reviews
app.use('/api/v1/bookings', bookingRoute); //domain/api/v1/auth/bookings



app.listen(port, () => {
    connectDB();
    console.log('server is running on port' + port);
});

