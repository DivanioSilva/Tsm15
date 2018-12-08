import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var LigthServiceService = /** @class */ (function () {
    function LigthServiceService(http) {
        this.http = http;
        this.url = "http://192.168.1.74:8080/home/api/ligth";
    }
    LigthServiceService.prototype.turnOn = function () {
        var formData = new FormData();
        return this.http.post(this.url, formData);
    };
    LigthServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LigthServiceService);
    return LigthServiceService;
}());
export { LigthServiceService };
//# sourceMappingURL=ligth-service.service.js.map