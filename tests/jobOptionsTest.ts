import { JobOptions } from "../src/jobOptions";

describe('job options', function () {
    it('ms', function () {
        let opts = new JobOptions(1, "ms");
        expect(opts.getTimeMilliseconds()).toBe(1);
    });
    it('milliseconds', function () {
        let opts = new JobOptions(10, "milliseconds");
        expect(opts.getTimeMilliseconds()).toBe(10);
    });
    it('s', function () {
        let opts = new JobOptions(1, "s");
        expect(opts.getTimeMilliseconds()).toBe(1000);
    });
    it('seconds', function () {
        let opts = new JobOptions(2, "seconds");
        expect(opts.getTimeMilliseconds()).toBe(2000);
    });
    it('m', function () {
        let opts = new JobOptions(1, "m");
        expect(opts.getTimeMilliseconds()).toBe(60000);
    });
    it('minutes', function () {
        let opts = new JobOptions(2, "minutes");
        expect(opts.getTimeMilliseconds()).toBe(120000);
    });
});


