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

// implement the service
function GetWeather(call, callback) {
   const city = call.request.city;
   const forecast = `${city}: Cloudy, 75F`;
   callback(null, {forecast});
}

// start the server
const server = new grpc.Server();
server.addService(weatherProto.WeatherService.service, {GetWeather});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
   console.log('Server running at http://0.0.0.0:50051');
   server.start();
});
