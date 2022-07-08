/* 
//Promise objesi için

//2 bilgi , resolve, reject -> başarılı durum, red durumu
var p = new Promise(function(resolve,reject){
    if(true){
        resolve('Succes');//başarılı bir durumsa succes döndürelim
    }else {
        reject('Failure');//red durumunda bir hata mesajı
    }
});
// true döndürdü ve succes yazdırdı

p.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
});
*/

/*
new Promise(function(resolve,reject){

        setTimeout(() => {
            resolve(5);
            //burda 1 saniye sonra resolve'e 5 değerini göndericek
        }, 1000);


}).then(function(number){
    console.log(number);//5 geldi 
    //eğer burda gelen numberi kullanıp geriye gönderirsek onuda aşağıda bir kere daha then ile alıcaz
    return number*number;//25 gönderildi
}).then(function(number){
    console.log(number);//25 geldi
    //bunu arttıradabiliriz
    return number*number;
}).then(function(number){
    console.log(number);//625 gelir böylece
});
*/


//örneğin bir annenin çocuğunda sene sonunda notları iyi gelirse yeni bir telefon alıcağına yönelik bir uygulama yapalım

const isMomHappy = true;

// const willGetNewPhone = new Promise(function(resolve,reject){

// }); Bunu bir farklı şekilde yazıcaz 

const willGetNewPhone = new Promise((resolve,reject)=>{
    if(isMomHappy){
        //anne mutluysa bir phone objesi oluşturduk ve onu true kısmında gönderdik
        const phone = {
            name : 'Iphone 11',
            price : '12.000',
            color : 'Black'
        }
        resolve(phone);
    }else{
        //eğer anne mutlu değilse
        const error = new Error('Mom is not happy!');
        reject(error);
    }
});

//Mesela burda çocuk arkadaşlarına annesinin bu jestini açıklıycak ve telefonu göstericek olsun

const showToFriends = function(phone){
    const message = 'Hi friends, this is my new phone ' + phone.name ;
    return Promise.resolve(message);//burda yeni bir promise ile new Promise veya Promise.resolve ile geri gönderebiliriz 
}




//yukarısı bizim için aslında bir şema aşağıda kullancaz

const askMom = function(){
    willGetNewPhone
    // .then(data=>{
    //     //true olduğunda resolve'den gelicek data
    //     console.log(data);
    // })
    .then(showToFriends)//showToFriends'den message dönücek
    .then(message => console.log(message))
    .catch(error=>{
        //false olduğunda error'dan gelicek data
        console.log(error);
    });
}

askMom();