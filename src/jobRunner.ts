import { JobOptions } from "./jobOptions";
import { IJob } from "./iJob";

export class JobRunner {
   options: JobOptions;
   job: IJob;

   constructor(options: JobOptions, job: IJob) {
      this.options = options;
      this.job = job;
   }

   start(): void {
      console.log("Starting job runner...")

      // execute once before starting interval
      this.job.run();

      setInterval(
         () => { this.job.run(); },
         this.options.getTimeMilliseconds());
   }

   display(): void {
      this.job.display();
      this.options.display();
   }

}