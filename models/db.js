const mongoose = require('mongoose');

// mongoose.set("strictQuery", false);
mongoose.set('strictQuery', true);

const url = process.env.MONGO_URI;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
.then(() => {
  console.log('Database connected Successfully');
})
.catch(err => console.log(err.message));



// mongoose.connection.once('open', function(){
//   console.log('Conection has been made!');
// }).on('error', function(error){
//     console.log('Error is: ', error);
// });

// const connectDB =  async () =>{

//   try{
//       const conn = await mongoose.connect(process.env.MONGO_URI,{
//           //must add in order to not get any error masseges:
//           useUnifiedTopology:true,
//           useNewUrlParser: true,
//           useCreateIndex: true
//       })
//       console.log(`mongo database is connected!!! ${conn.connection.host} `)
//   }catch(error){
//       console.error(`Error: ${error} `)
//       process.exit(1) //passing 1 - will exit the proccess with error
//   }

// }

// export default connectDB
