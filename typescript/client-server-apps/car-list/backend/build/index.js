"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var cars_controller_1 = __importDefault(require("./controllers/cars/cars.controller"));
var app = new app_1.default([
    new cars_controller_1.default(),
], 5000);
app.listen();
