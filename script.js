let name = "Satih Hilda Adjekawe";
let courses = ['html', 'css','javascript'];

let numOfCourses;
numOfCourses = courses.length;

document.write(name +'<br>' + courses +'<br>');


let i;


if(numOfCourses%2===0){
    
    for(i=0; i<=200; i+=2){
        document.write(i + '<br>')
    }
}else{
    for(i=1; i<=200; i+=2){
        document.write(i + '<br>')
    }

}

