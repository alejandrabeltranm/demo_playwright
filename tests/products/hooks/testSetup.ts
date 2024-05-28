import { CreateProductPage } from '../interface/ui.interface';
import { modules } from '../data/modules.data';
import { ProductUtils } from "../utils/randomProductUtils";
import { PathUtils } from '../utils/fileUploadUtils'; 
import { Assertions } from '../hooks/assertions';

export class TestSetup {
    assertions: Assertions;
    productCreate: CreateProductPage;
    selectModule: any;
    randomProductName: string;
    resultRandomProductName: string;
    filePath: string;

    constructor(page: any) {
        this.assertions = new Assertions(page);
        this.productCreate = new CreateProductPage(page);
        this.selectModule = modules[2]; 
        this.randomProductName = ProductUtils.getRandomProductName();
        this.resultRandomProductName = this.randomProductName;
        this.filePath = PathUtils.getAbsolutePath('tests/products/data/files/logo-sqa.png');
    }
}
