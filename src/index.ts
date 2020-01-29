import { JobOptions } from "./jobOptions";
import { JobRunner } from "./jobRunner";
import { MyJob } from "./myJob";

let opts = new JobOptions(10, "seconds");

let time = { s: 'seconds' }
console.log(time)
console.log(time['s'])

//
// need to unit test this stuff
//
// opts = new JobOptions(1000,"ms");
// opts.display()
// console.log(opts.getTimeMilliseconds())

// opts = new JobOptions(5,"m");
// opts.display()
// console.log(opts.getTimeMilliseconds())

let job = new MyJob('my job', 'my job description here');



let runner = new JobRunner(opts, job);
runner.display();
runner.start()

