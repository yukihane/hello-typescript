import { ZipCodeValidator } from "./ZipCodeValidator";
import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
import * as validator from "./ZipCodeValidator";
import DefaultImportValidator from "./ParseIntBasedZipCodeValidator";
// default import もこうやってカッコでimportできる(のでdefaultっていうのは結局syntax sugarだな…)
import { default as ParseIntBasedZipCodeValidator } from "./ParseIntBasedZipCodeValidator";

let myValidator = new ZipCodeValidator();
let myValidator2 = new ZCV();
let myValidator3 = new validator.ZipCodeValidator();
let validator4 = new ParseIntBasedZipCodeValidator();
