//Belajar objek bertipe class
// class Human{
//     constructor(a,b,c){
//         this.nama=a
//         this.age=b
//         this.job=c
//     }
//     kalimat=()=>{
//         return 'nama saya :'+ this.nama +'\n'+' umur saya :' +  this.age +'\n'+ 'pekerjaan :' + ' Front End'
//     }
// }
// var arrmanusia=[]
// arrmanusia.push(new Human('okki',24,'front end'))
// console.log(arrmanusia)
// console.log(arrmanusia[0].kalimat())

//Belajar objek literal
// var obj={
//     nama: 'Okki',
//     umur: 24,
//     job : 'Front End',
//      namaumur(){
//         return this.nama  +  " " + this.umur + " " + this.job//menggunakan method dalam objek
//     }
// }
// console.log(obj)//outputnya: nama:'okki', umur:24, job:'Front End'
// console.log(obj.namaumur())// outpputnya kalau ada method: okki 24 Front End

//Belajar objek inheriten/extends
 
class Human{
    constructor(a,b){
        this.nama=a,
        this.umur=b
    }
}
class Student extends Human{
    constructor(a,b,_nilai){
        super(a,b)
        this._nilai=_nilai
    }
}
class Teacher extends Human{
    constructor(a,b,_job){
        super(a,b)
        this.job=_job
    }
}
var input=new Teacher('okki',24,'Front End')
var input1=new Student('okki',24,75)
console.log(input)
console.log(input1)

console.log("====================================")
var arrmanusia=[]
arrmanusia.push(new Teacher('okki',24,'Front End'))
arrmanusia.push(new Student('Bayu',17,75))
console.log(arrmanusia)