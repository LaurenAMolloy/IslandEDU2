import mongoose from "mongoose";
import School from '../models/School'
import { schoolPrefixes, schoolConcepts, schoolTypes} from './seedHelpers';
import cities from "./cities";

//connect to Mongo
mongoose.connect('mongodb://localhost:27017/island-edu2')

function getSample(array) {
    return array[Math.floor.Math.random() * array.length]
}

function getRandom(min, max) {
    const rand = Math.floor(Math.random * (max - min + 1) * min);
    return rand
}

//seed db
async function seedDB(){
await School.deleteMany({})
for(let i = 0; i < 50; i++) {
    const random = Math.floor(Math.random() * cities.length)
    const city = cities[random]
    const price = getRandom(3000, 100000);
    const school = new School({
        name:`
        ${getSample(schoolPrefixes)} 
        ${getSample(schoolConcepts)} 
        ${getSample(schoolTypes)} `,
        location: `${city.town}, ${city.district}`,
        image: `https://picsum.photos/400?random=${Math.random()}`,
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quibusdam quo eligendi ab harum, officia consequuntur expedita ipsam amet tempora adipisci neque at animi, cupiditate fuga. Recusandae eius consequatur aspernatur.',
        price: price,
    })
    await school.save()
    }
}

seedDB(). then(() => {
    mongoose.close()
})