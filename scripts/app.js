import DefaultApplicationController from "./controllers/base-controllers/DefaultApplicationController.js";
import TestFormController from "./controllers/test-controllers/TestFormController.js";
import TestFormForEachController from "./controllers/test-controllers/TestFormForEachController.js";
import TestFormChildrenController from './controllers/test-controllers/TestFormChildrenController.js';
import RenderListController from './controllers/test-controllers/RenderListController.js';
import ApplicationController from "./controllers/base-controllers/ApplicationController.js";
import DefaultFormController from "./controllers/base-controllers/DefaultFormController.js";

document.addEventListener("controllerFactoryIsReady", (e) => {
    let ControllerFactory = e.detail;

    ControllerFactory.registerController("TestFormController", TestFormController);
    ControllerFactory.registerController("ApplicationController", ApplicationController);
    ControllerFactory.registerController("DefaultFormController", DefaultFormController);
    ControllerFactory.registerController("RenderListController", RenderListController);
    ControllerFactory.registerController("TestFormForEachController", TestFormForEachController);
    ControllerFactory.registerController("TestFormChildrenController", TestFormChildrenController);
    ControllerFactory.registerController("DefaultApplicationController", DefaultApplicationController);
});

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('./sw-root.js').then(function(registration) {
//             // Registration was successful
//             console.log('ServiceWorker registration successful with scope: ', registration.scope);
//         }, function(err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed: ', err);
//         });
//     });
// }
