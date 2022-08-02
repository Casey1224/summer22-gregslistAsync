import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Components/HouseForm.js"
import { HousesService } from "../Services/HousesService.js"
import { Pop } from "../Utils/Pop.js"




function _drawHouses() {
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.template)

  document.getElementById('listings').innerHTML = '<p> houses go here </p>'
  document.getElementById('form').innerHTML = getHouseForm()
}



export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    this.getHouses()
  }
  viewHouses() {
    _drawHouses()
    // swap out car form with house form
  }
  async getHouses() {
    try {
      await HousesService.getHouses()

    } catch (error) {
      console.error('[Get Houses]', error)
      Pop.error(error)

    }
  }

  async createHouse() {
    window.event.preventDefault()
    let form = window.event.target

    let newHouse = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      price: form.price.value,
      description: form.price.value,


    }
    await housesService.createHouse(newHouse)
    form.reset()
  } catch(error) {
    console.error('[Create House]', error)
    Pop.error(error)
  }

}