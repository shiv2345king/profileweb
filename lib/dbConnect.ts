import mongoose, { connections } from 'mongoose';


type ConnectionObject= {
    isConnected : number;
}

const connection = {} as ConnectionObject;

async function dbConnect() {
    if (connection.isConnected) {
        console.log('Already connected to MongoDB');
        return;
    }
    try {
        const db = mongoose.connect(process.env.MONGODB_URL!);
        connection.isConnected = (await db).connections[0].readyState;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

export default dbConnect;