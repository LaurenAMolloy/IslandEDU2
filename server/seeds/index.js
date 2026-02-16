import mongoose from "mongoose";
import School from '../models/school.js'
import { schoolPrefixes, schoolConcepts, schoolTypes} from './seedHelpers.js';
import cities from "./cities.js";

//connect to Mongo
mongoose.connect('mongodb://localhost:27017/island-edu2');

function getSample(array) {
    return array[Math.floor(Math.random() * array.length)]
}

//seed db
const seedDB = async() => {
await School.deleteMany({})
console.log("Database cleared")


for(let i = 0; i < 50; i++) {
    const random = Math.floor(Math.random() * cities.length)
    const city = cities[random]
    const price = Math.floor(Math.random() * (15000 - 3000 + 1) + 3000);
    const rawName =`
        ${getSample(schoolPrefixes)} 
        ${getSample(schoolConcepts)} 
        ${getSample(schoolTypes)} `;
    const cleanName = rawName.replace(/\s+/g, ' ').trim();

    const school = new School({
        name: cleanName,
        location: `${city.town}, ${city.district}`,
        image: `https://picsum.photos/400?random=${Math.random()}`,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quibusdam quo eligendi ab harum, officia consequuntur expedita ipsam amet tempora adipisci neque at animi, cupiditate fuga. Recusandae eius consequatur aspernatur.',
        price: price,
    });

    await school.save();
    }
    console.log("Seeding Success")
}

seedDB().then(() => {
    mongoose.connection.close()
})