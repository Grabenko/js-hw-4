let langs = ["Pyton", "C++", "C#", "PHP"];
for (let lang of langs){
    if ('Java Script' !== lang){
        console.log(`Значення Java Script в списку немає, додаємов масив.`);
    }
}
langs.push('Java Script');
console.log(langs);