/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ task)
/* harmony export */ });
function task(title, complete, dueDate, priority, description) {
    const getTitle = () => { return title; }
    const getComplete = () => { return complete; }
    const getDueDate = () => { return dueDate; }
    const getPriority = () => { return priority; }
    const getDescription = () => { return description; }

    const setTitle = (newTitle) => { this.title = newTitle; }
    const setComplete = (newComplete) => { this.complete = newComplete; }
    const setDueDate = (newDueDate) => { this.dueDate = newDueDate; }
    const setPriority = (newPriority) => { this.priority = newPriority; }
    const setDescription = (newDescription) => { this.description = newDescription; }


    return {
        getTitle,               setTitle,
        getComplete,            setComplete,
        getDueDate,             setDueDate,
        getPriority,            setPriority,
        getDescription,         setDescription
    }

}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmLDZCQUE2QjtBQUM3QixnQ0FBZ0M7QUFDaEMsK0JBQStCO0FBQy9CLGdDQUFnQztBQUNoQyxtQ0FBbUM7O0FBRW5DLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFDM0MseUNBQXlDO0FBQ3pDLDJDQUEyQztBQUMzQyxpREFBaUQ7OztBQUdqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRhc2sodGl0bGUsIGNvbXBsZXRlLCBkdWVEYXRlLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHsgcmV0dXJuIHRpdGxlOyB9XG4gICAgY29uc3QgZ2V0Q29tcGxldGUgPSAoKSA9PiB7IHJldHVybiBjb21wbGV0ZTsgfVxuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiB7IHJldHVybiBkdWVEYXRlOyB9XG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiB7IHJldHVybiBwcmlvcml0eTsgfVxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4geyByZXR1cm4gZGVzY3JpcHRpb247IH1cblxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7IHRoaXMudGl0bGUgPSBuZXdUaXRsZTsgfVxuICAgIGNvbnN0IHNldENvbXBsZXRlID0gKG5ld0NvbXBsZXRlKSA9PiB7IHRoaXMuY29tcGxldGUgPSBuZXdDb21wbGV0ZTsgfVxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4geyB0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlOyB9XG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAobmV3UHJpb3JpdHkpID0+IHsgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5OyB9XG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHsgdGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uOyB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRpdGxlLCAgICAgICAgICAgICAgIHNldFRpdGxlLFxuICAgICAgICBnZXRDb21wbGV0ZSwgICAgICAgICAgICBzZXRDb21wbGV0ZSxcbiAgICAgICAgZ2V0RHVlRGF0ZSwgICAgICAgICAgICAgc2V0RHVlRGF0ZSxcbiAgICAgICAgZ2V0UHJpb3JpdHksICAgICAgICAgICAgc2V0UHJpb3JpdHksXG4gICAgICAgIGdldERlc2NyaXB0aW9uLCAgICAgICAgIHNldERlc2NyaXB0aW9uXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9