//memfilter angka
var angka=[1,2,3,4,5,6]

var angkaganjil=angka.filter((val)=>val%2==1)

const bebas=(newarr=[],cb)=>{
    var output=[]
    for(let i=0;i<newarr.length;i++){
        if(cb(newarr[i])){
            output.push(newarr[i])
        }
    }
    return output
}
const angkaganjilbuatan=bebas(angka,(val)=>val%2==1)
console.log(angkaganjilbuatan)
console.log(angka)
//contoh soal
//console.log(robin(false).max[2]()['bayu'].brian(true))//hana
const robin=(bool)=>{
    if(bool){

    }else{
        return{
            max:[,,()=>{
                return{
                    bayu:{
                        brian:(bool)=>{
                            if(bool){
                                return 'hana'
                            }
                        }
                    }
                }
            }]
        }
    }
}
console.log(robin(false).max[2]()['bayu'].brian(true))//hana

// const max=[,,[,{
//     hana:()=>{
//         return()=>{

//         }
//     }
// }]]