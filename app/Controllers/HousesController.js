import { ProxyState } from "../AppState.js"
import { getHouseForm } from "../Components/HouseForm.js"
import { housesService } from "../Services/HousesService.js"
import { Pop } from "../Utils/Pop.js"




function _drawHouses() {
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.Template)

  document.getElementById('listings').innerHTML = template
  document.getElementById('form').innerHTML = getHouseForm()
}



export class HousesController {
  constructor() {
    ProxyState.on('houses', _drawHouses)
    this.getHouses()
  }
  viewHouses() {
    _drawHouses()
    this.getHouses()
  }
  async getHouses() {
    try {
      await housesService.getHouses()

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
      imgUrl: form.img.value,
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
  async deleteHouse(houseId) {
    try {
      await housesService.deleteHouse(houseId)
    } catch (error) {
      console.error('[Delete House]', error)
      Pop.error(error)
    }
  }
  adjustHouse(houseId) {
    let house = ProxyState.houses.find(h => h.id == houseId)
    // @ts-ignore
    document.getElementById('form').innerHTML = getHouseForm(house)
  }
  async editHouse(houseId) {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      let form = window.event.target
      let houseData = {
        id: houseId,
        bedrooms: form.bedrooms.value,
        bathrooms: form.bathrooms.value,
        levels: form.levels.value,
        imgUrl: form.img.value,
        year: form.year.value,
        price: form.price.value,
        description: form.price.value,
      }
      await housesService.editHouse(houseData)
    } catch (error) {
      console.error('[Edit House]', error)
      Pop.error(error)
    }
  }
}