import DefaultController from "./controllers/DefaultController.js";
import Controller from "./controllers/Controller.js";
import RivetsBinders from './rivets/RivetsBinders.js';
import RivetsFormatters from './rivets/RivetsFormatters.js';
import FormController from "./controllers/FormController.js";

document.addEventListener("controllerFactoryIsReady", (e) => {
    let ControllerFactory = e.detail;

    ControllerFactory.registerController("Controller", Controller);
    ControllerFactory.registerController("FormController", FormController);
    ControllerFactory.registerController("DefaultController", DefaultController);
});

RivetsBinders.init();
RivetsFormatters.init();