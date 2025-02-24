const contact ={
    phonenumber:'555-0981',
    email: 'alex@gmail.com',
    name: 'alex',
    address: {
        city: "Karachi",
        province: "Sindh",
        country: "Pakistan",
    },
    greet(){
        return `Hello ${this.name}. I Live in ${this.address.city}`//the keyword 'this' means search from this object's scope
    }
};
console.log(contact.greet());
// console.log(Math);


// // let myar =[[1,2],[3,4]]
// // console.log(myar[0][1]);// output: 2,

//add new keyvaluepair
// contact.linkedinid = 'my_id'// console.log(contact);


//modify keyvaluepair
// contact.email ='no-email'
// console.log(contact);



// //delet keyvalue pair
// console.log(contact);
// delete contact.name
// console.log(contact);

// console.log(contact.name);// value of the keyvaluepair "name" will be comeout 
// console.log(contact.address.city);//nested object calling


//generating new vriables
// for (let i=1;i<=10;i++){
// eval(`mye${i} = ${i}+2`)
// }
// console.log(mye);
