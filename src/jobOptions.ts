export class JobOptions {
    waitTime: number;
    timepart: string;

    constructor(waitTime: number, timePart: string = "ms") {
        this.waitTime = waitTime

        // if timepart not in s/ms/m throw an error

        this.timepart = timePart

        if (this.timepart == "seconds") {
            this.timepart = "s"
        }
        if (this.timepart == "milliseconds") {
            this.timepart = "ms"
        }
        if (this.timepart == "minutes") {
            this.timepart = "m"
        }

    }

    display(): void {
        console.log(`Job options: ${this.waitTime} ${this.timepart}`);
    }

    getTimeMilliseconds(): number {
       
        if (this.timepart == "s") {
            return this.waitTime * 1000;
        }

        if (this.timepart == "m") {
            return this.waitTime * 60 * 1000;
        }

        return this.waitTime
    }
}