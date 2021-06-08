import express from 'express';
import Cars from '../../interfaces/cars.interface';

class CarsController {
    public path: string = "/cars";
    public router: express.Router = express.Router();

    private carsList: Cars[] = [];

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes(): void {
        this.router.get(this.path, this.getAllCars);
        this.router.post(this.path, this.createCar);
    }

    getAllCars = (request: express.Request, response: express.Response) => {
        response.send(this.carsList);
    }

    createCar = (request: express.Request, response: express.Response) => {
        const car: Cars = request.body;
        this.carsList.push(car);
        response.send(car);
    }
}

export default CarsController;