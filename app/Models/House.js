
export class House {
    constructor({ id, bedrooms, bathrooms, levels, imgUrl, year, price, description }) {

        this.id = id
        this.bedrooms = bedrooms || 0
        this.bathrooms = bathrooms || 0
        this.levels = levels || 0
        this.img = imgUrl || ''
        this.year = year || 0
        this.price = price || 0
        this.description = description || ''
    }
    get Template() {
        return `
        <div class="col-4 p-3">
        <div class="bg-white elevation-2">
          <img class="img-fluid" src="${this.img}" alt="">
          <div class="p-2">
            <h4 class="text-center">${this.bedrooms} | ${this.bathrooms} | ${this.levels} | ${this.year}</h4>
            <p>${this.description}</p>
            <p class="text-end text-success m-0">$<b>${this.price}</b></p>
            <button class="btn btn-info" onclick="app.housesController.adjustHouse('${this.id}')">Adjust House Settings</button> 
            <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">delete me</button> 
          </div>
        </div>
      </div>
    `
    }
}



