import mongoose from "mongoose";

// database connection
export const mongoDB = () => {
    mongoose.connect("mongodb+srv://aks969014:7906444281@cluster0.yzy9ttz.mongodb.net/ecommerse",
        {
            useNewUrlParser: true,
           
            useUnifiedTopology: true
          }
        
        )
    .then(() => {
        console.log("MongoDb database is connected!"
      
        
        );
    })
    .catch((error) => {
        console.log(error);
    });
}