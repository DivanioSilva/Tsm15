import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LigthServiceService } from '../ligth-service.service';
var LigthComponent = /** @class */ (function () {
    function LigthComponent(service) {
        this.service = service;
    }
    LigthComponent.prototype.ngOnInit = function () {
        this.turnOn();
    };
    LigthComponent.prototype.turnOn = function () {
        var _this = this;
        this.service.turnOn().subscribe(function (data) {
            _this.response = data;
        });
    };
    LigthComponent = tslib_1.__decorate([
        Component({
            selector: 'app-ligth',
            templateUrl: './ligth.component.html',
            styleUrls: ['./ligth.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [LigthServiceService])
    ], LigthComponent);
    return LigthComponent;
}());
export { LigthComponent };
//# sourceMappingURL=ligth.component.js.map