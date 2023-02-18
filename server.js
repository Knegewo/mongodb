const { MongoClient, ObjectId} = require('mongodb');
const uri = require ('./app')

const client = new MongoClient(uri);

const dbname = 'hr';
const collectName = "employees";

const list = client.db(dbname).collection(collectName)

const createConnection = async() => {
    try {
        await client.connect()
        console.log(`connected to ${dbname}`);
    }
    catch { 
        console.log('error');
    }
}

// createConnection()

//Insert Single data

// const data = {
// 
//     name: "konjit",
//     lname: "coolstack",
//     email: "coolstack@abc.com",
//     password: "1234567",
//     salary: 120000
// }
// const insertdata = async () => {
//     try {await createConnection()
//        let result = await list.insertOne(data)
//        console.log(result);
//     }
//     catch {
//         console.log('error');
// }
// }

// insertdata();
//===================================================
//Insert Many Datas
// const data = [
// {
//     name: "kidus",
//     lname: "coolstack",
//     email: "coolstack@abc.com",
//     password: "1234567",
//     salary: 125000
// },
// {
//     name: "Fistum",
//     lname: "coolstack",
//     email: "coolstack@abc.com",
//     password: "1234567",
//     salary: 1900000
// },
// {
//     name: "Abrishi",
//     lname: "coolstack",
//     email: "coolstack@abc.com",
//     password: "1234567",
//     Salary: 180000
// },
// {
// name: "Senedu",
// lname: "coolstack",
// email: "coolstack@abc.com",
// password: "1234567",
// salary: 123000
// },
// {
// name: "Filly",
// lname: "coolstack",
// email: "coolstack@abc.com",
// password: "1234567",
// salary: 121000
// },
// {
// name: "Mihert",
// lname: "coolstack",
// email: "coolstack@abc.com",
// password: "1234567",
// salary: 900000
// },
// {
// name: "Baharoh",
// lname: "coolstack",
// email: "coolstack@abc.com",
// password: "1234567",
// Salary: 180000
// },
// ]
// const insertdataMany = async () => {
//     try {await createConnection()
//        let result = await list.insertMany(data)
//        console.log(result);
//     }
//     catch {
//         console.log('error');
// }
// }
// insertdataMany();

// ===========================================
//Query Find single data

// const singledata ={salary: {$lt: 190000}}

// const singledata ={name: "Fitsum"}

// const finddata = async () => {
//     try {await createConnection()
//        let result = list.find(singledata)
//        let numberofdata = list.countDocuments(singledata)
//        await result.forEach((doc) => 
//         console.log(doc)
//        )
//     console.log(`${await numberofdata} (data)`)
//     }
//     catch {
//         console.log('error');
// }
// }
// finddata();

// const singledata ={salary: {$lte: 125000}}
// const finddata = async () => {
//     try {await createConnection()
//        let result = list.find(singledata).sort({salary: -1}).limit(5)
//        let numberofdata = list.countDocuments(singledata)
//        await result.forEach((doc) => 
//         console.log(doc)
//        )
//     // console.log(`${await numberofdata} (data)`)
//     }
//     catch {
//         console.log('error');
// }
// }
// finddata();
// ====================================

//increase
// const updatedoc ={name: 'Fitsum'}
// const updatesalary = {$inc: {salary: 200000}}
// const updatedata = async () => {
//     try {await createConnection()
//        let result = list.updateOne(updatedoc, updatesalary)
  
        
//     if(result.modifiedCount = 1) {
//         console.log('document updated');
//     } else {
//         console.log('no document found');
//     }
//     }
//     catch {
//         console.log('error');
        
// }
// }
// updatedata();
// =====================================

//update

// const updatedoc ={name: 'Fitsum'}
// const updatesalary = {$set: {salary: 200000}}
// const updatedata = async () => {
//     try {await createConnection()
//        let result = list.updateOne(updatedoc, updatesalary)
         
//     if(result.modifiedCount = 1) {
//         console.log('document updated');
//     } else {
//         console.log('no document found');
//     }
//     }
//     catch {
//         console.log('error');
        
// }
// }
// updatedata();

// ===============================================

//Delete

const delete1 ={name: "konjit"}

const deletedoc = async () => {
    try {await createConnection()
       let result = list.deleteOne(delete1)

       console.log('konjit is deleted.');
    }
    catch {
        console.log('error');
}
}
deletedoc();
