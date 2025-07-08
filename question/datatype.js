function datatypeexample(){

    let str = "hi all";
    let number = 67;
    let isactive = "true";

    const count = [1,2,3,4];
    const details = {
        name:"Raj",
        age:23
    }
    console.log(typeof str, typeof number, typeof isactive);
    console.log(count[2]);
    console.log(details.age);
}
module.exports = datatypeexample;