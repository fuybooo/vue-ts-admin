import {File} from 'formidable'
import * as XLSX from 'xlsx'

export default class FileService {
  public static readFile (file: File) {
    const workbook = XLSX.read(file.path)
    console.log(workbook)
  }
}
