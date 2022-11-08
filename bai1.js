const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// 1
let count = 0;
let sum = 0;
people.forEach((item) => {
    count++;
    sum = sum + parseInt(item.salary);
})
console.log("lương trung bình all là: ",sum/count);

// 2 
var x = new Date();
var a = x.getFullYear();
console.log(a);

console.log("Những người trên 30 tuổi là: ");
people.forEach((item)=> {
    let b = new Date(item.DOB);
    //console.log(b.getFullYear());
    if(parseInt(a)-parseInt(b.getFullYear()) > 30){
        console.log(item);
    }
})

// 3
console.log("Họ tên đầy đủ");
people.forEach((item) =>{
    console.log(item.firstName+" "+item.lastName);
})

//4
var y = new Date();
var c = x.getFullYear();
function Sort(list){
    for(let i=0; i<people.length-1; i++){
        for(let j=i+1; j<people.length; j++){
            let d = new Date(people[i].DOB);
            let e = new Date(people[j].DOB);
            if(parseInt(c)-parseInt(d.getFullYear()) > parseInt(c)-parseInt(e.getFullYear())){
                let temp = people[i];
                people[i]= people[j];
                people[j]=temp;    
            }
            else{
                if(parseInt(d.getFullYear()) == parseInt(e.getFullYear())){
                    if(parseInt(d.getMonth()) < parseInt(e.getMonth())){
                        let temp1 = people[i];
                        people[i]= people[j];
                        people[j]=temp1; 
                    }
                    else{
                    }
                }
            }
        }
    }
    return list;
}

console.log();
var result = Sort(people);
console.log("Danh sách sau khi sắp xếp là:",result);

//5 
// console.log("Mỗi bộ phận có số người là:");
let departments = {};
people.forEach((item) => {
    if(departments[item.department] == null)
        departments[item.department] = 0;
    departments[item.department] += 1;
})
console.log(departments);