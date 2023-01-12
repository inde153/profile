import mongoose from 'mongoose'


export  = () => {
  function connect() {
    mongoose.connect('mongodb://localhost:27017', function(err) {
      if (err) {
        console.error('mongodb connection error', err);
      }
      console.log('mongodb connected');
    });
  }
  connect();
  mongoose.connection.on('disconnected', connect);
};