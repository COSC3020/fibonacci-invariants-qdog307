function fib(n) {
    const fibArray = new Array(n + 1);

    function computeFib(i) {
        if (i === 0) {
            fibArray[0] = 0;
            return 0;
        }
        if (i === 1) {
            fibArray[1] = 1;
            return 1;
        }
        if (fibArray[i] === undefined) {
            fibArray[i] = computeFib(i - 1) + computeFib(i - 2);
        }
        return fibArray[i];
    }

    computeFib(n);
    return fibArray;
}

