import App from './app';
import CarsController from './controllers/cars/cars.controller';

const app = new App(
    [
        new CarsController(),
    ],
    5000,
);

app.listen();