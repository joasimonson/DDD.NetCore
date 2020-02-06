"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Counter = require("./Counter");
var WeatherForecasts = require("./WeatherForecasts");
var Cervejas = require("./Cerveja");
var Revendedores = require("./Revendedor");
// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
exports.reducers = {
    counter: Counter.reducer,
    weatherForecasts: WeatherForecasts.reducer,
    cervejas: Cervejas.reducer,
    revendedores: Revendedores.reducer,
};
//# sourceMappingURL=index.js.map