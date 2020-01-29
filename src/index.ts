import { JobOptions } from "./jobOptions"; 
import { JobRunner } from "./jobRunner"; 

console.log('doing some stuff in ts')

let opts = new JobOptions(5,"s");
opts.display()
//console.log(opts.getTimeMilliseconds())

// opts = new JobOptions(1000,"ms");
// opts.display()
// console.log(opts.getTimeMilliseconds())

// opts = new JobOptions(5,"m");
// opts.display()
// console.log(opts.getTimeMilliseconds())

let runner = new JobRunner(opts);
runner.start()

