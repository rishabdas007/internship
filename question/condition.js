function conditionexample(){
    let score = 85;
    if(score>90){
        console.log("Grade A");
    }
    else if (score>=75){
        console.log("Grade B");
    }
    else{
        console.log("Grade C");
    }

    let day ="Monday";
    switch(day){
        case "Monday":
            console.log("Start of the week");
            break;
        case "Sunday":
            console.log("Weekend");
            break;
        default:
            console.log("midweek");
    }
    let pass = score>50 ? "passed": "failed";
    console.log(pass);
}
module.exports = conditionexample;