"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var CarsController = /** @class */ (function () {
    function CarsController() {
        var _this = this;
        this.path = "/cars";
        this.router = express_1.default.Router();
        this.carsList = [];
        this.getAllCars = function (request, response) {
            response.send(_this.carsList);
        };
        this.createCar = function (request, response) {
            var car = request.body;
            _this.carsList.push(car);
            response.send(car);
        };
        this.intializeRoutes();
    }
    CarsController.prototype.intializeRoutes = function () {
        this.router.get(this.path, this.getAllCars);
        this.router.post(this.path, this.createCar);
    };
    return CarsController;
}());
exports.default = CarsController;
