const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

let NewPromise = function (execute) {
    this.resolveQueue = [];
    this.rejectQueue = [];
    this._status = PENDING;
    this._value = null;
    const resolveFn = (val) => {
        const run = () => {
            if (this._status !== PENDING) return;
            this._status = FULFILLED;
            this._value = val;
            while (this.resolveQueue.length > 0) {
                let fn = this.resolveQueue.shift();
                fn(val);
            }
        };
        setTimeout(run);
    };
    const rejectFn = (val) => {
        const run = () => {
            if (this._status !== PENDING) return;
            this._status = REJECTED;
            this._value = val;
            while (this.rejectQueue.length > 0) {
                let fn = this.rejectQueue.shift();
                fn(val);
            }
        };
        run();
    };

    execute(resolveFn, rejectFn);
};

NewPromise.prototype.then = function (resolveFn, rejectFn) {
    typeof resolveFn !== "function" ? (resolveFn = () => {}) : null;
    typeof rejectFn !== "function" ? (rejectFn = () => {}) : null;

    return new NewPromise((resolve, reject) => {
        const fulfilledFn = (value) => {
            try {
                let x = resolveFn(value);
                x instanceof NewPromise ? x.then(resolve, reject) : resolve(x);
            } catch (error) {
                reject(error);
            }
        };

        const rejectedFn = (value) => {
            try {
                let x = rejectFn(value);
                x instanceof NewPromise ? x.then(resolve, reject) : resolve(x);
            } catch (error) {
                reject(error);
            }
        };

        switch (this._status) {
            case PENDING:
                this.resolveQueue.push(fulfilledFn);
                this.resolveQueue.push(rejectedFn);
                break;

            case FULFILLED:
                fulfilledFn(this._value);
                break;
            case REJECTED:
                rejectedFn(this._value);
                break;
        }
    });
};

let p = new NewPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 3000);
});

p.then((val) => {
    console.log(val, "val");
}).then(() => {
    console.log("val2");
});

// console.log(p.then((val) => {
//     console.log(val, "val");
// }))
