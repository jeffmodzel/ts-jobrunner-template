import { IJob } from "./iJob";

export class MyJob implements IJob {
    name: string;
    description: string;

    constructor(name: string, description?: string) {
        this.name = name;
        if (description) {
            this.description = description;
        }
    }

    run(): void {
        console.log();
        console.log('Do important work here, like...');
        console.log('   * Call an API');
        console.log('   * Do some AWS stuff');
        console.log('   * Connect to a database');
    }

    display(): void {
        console.log(`MyJob name: ${this.name}, description: ${this.description}`);
    }

}