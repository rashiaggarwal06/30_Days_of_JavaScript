/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    var cnt = 0;
    for(let i = 0; i < args.length; i++)
        cnt += 1;
    return cnt;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */