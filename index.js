let funcs = {};
module.exports = (name, func, time) => {
    if (funcs[name]) return false;
    funcs[name] = true;
    func();
    setTimeout(function () {
        funcs[name] = null;
    }, time)
    return true;
};