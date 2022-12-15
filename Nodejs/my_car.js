module.exports.drive = function () {
    console.log("The car moves forward");
}
module.exports.turn = function (degrees) {
    console.log(`The car turns ${degrees} degree`);
}
module.exports.break = function () {
    console.log("The car stops");
}