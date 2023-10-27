import mongoose from "mongoose";


const URI="mongodb://127.0.0.1:27017/netflixo-data"

export const connectDB = async () => {
   try {
      const conn = await mongoose.connect(URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log("MongoDB connected");
   } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit(1);
   }
};
