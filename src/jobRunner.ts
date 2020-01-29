
import { JobOptions } from "./jobOptions";


export class JobRunner {
   waitTime: number;

   // pass in IJob object
   constructor(options: JobOptions) {
      this.waitTime = options.getTimeMilliseconds();
   }

   //function 
   start(): void {
      console.log("Starting")

      function intervalFunc() {
         console.log('Do some important stuff....');
      }

      setInterval(intervalFunc, this.waitTime);

   }

}