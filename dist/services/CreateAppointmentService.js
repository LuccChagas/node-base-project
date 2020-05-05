"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var appointmentsRepository_1 = __importDefault(require("../repositories/appointmentsRepository"));
;
var CreateAppointmentService = /** @class */ (function () {
    function CreateAppointmentService() {
    }
    CreateAppointmentService.prototype.execute = function () {
        var appointmentDate = startOfHour(parsedDate);
        var findAppointmentInSameDate = appointmentsRepository_1.default.findByDate(parsedDate);
        if (findAppointmentInSameDate) {
            return response.status(400).json({ message: "This appointments is already booked" });
        }
        var appointment = appointmentsRepository_1.default.create({
            provider: provider,
            date: appointmentDate,
        });
        return appointment;
    };
    return CreateAppointmentService;
}());
exports.default = CreateAppointmentService;
