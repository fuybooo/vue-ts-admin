"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XLSX = require("xlsx");
class FileService {
    static readFile(file) {
        const workbook = XLSX.read(file.path);
        console.log(workbook);
    }
}
exports.default = FileService;
