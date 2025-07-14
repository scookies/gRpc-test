const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './weather.proto';

// Load the protobuf
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
   keepCase: true,
   longs: String,
   enums: String,
   defaults: true,
   oneofs:true,
});
const weatherProto = grpc.loadPackageDefinition(packageDefinition).weather;

// Create a client
const client = new weatherProto.WeatherService('localhost:50051', grpc.credentials.createInsecure());

// Call the GetWeather RPC
client.GetWeather({city: 'Seattle'}, (err, response) => {
   if (err) {
      console.error('Error:', err);
   } else {
      console.log('Forecast:', response.forecast);
   }
});
