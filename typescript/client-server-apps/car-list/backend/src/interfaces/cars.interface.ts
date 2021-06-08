import Engine from './engine.interface';
import Brand from './brand.interface';

interface Cars {
    engine: Engine,
    color: string,
    brand: Brand,
    drivetrain: string,
    price: number
}

export default Cars;