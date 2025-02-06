import mongoose from "mongoose";
import colors from 'colors';

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_URI!);
        const url = `${connection.host}:${connection.port}`;
        console.log(colors.cyan.bold(`MongoDB conectado en: ${url}`));
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}