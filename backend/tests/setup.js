// const mongoose=require('mongoose')
// const {MongoMemoryServer}=require('mongodb-memory-server')

// let const mongoose = require('mongoose');

// beforeAll(async () => {
//   const uri = process.env.MONGO_URI; // GitHub Actions injects this
//   await mongoose.connect(uri);
// });

// afterAll(async () => {
//   await mongoose.disconnect();
// });

// beforeEach(async () => {
//   await mongoose.connection.db.dropDatabase();
// });
// mongoServer;

// beforeAll(async()=>{
//     mongoServer=await MongoMemoryServer.create()
//     const uri=mongoServer.getUri()
//     await mongoose.connect(uri)
// })

// afterAll(async()=>{
//     await mongoose.disconnect()
//     await mongoServer.stop()
// })

// beforeEach(async()=>{
//     await mongoose.connection.db.dropDatabase()
// })

const mongoose = require('mongoose');

beforeAll(async () => {
  const uri = process.env.MONGO_URI; // GitHub Actions injects this
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
});

beforeEach(async () => {
  await mongoose.connection.db.dropDatabase();
});
