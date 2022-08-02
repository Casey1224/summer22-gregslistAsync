export class House {

    constructor({ id, bedrooms, bathrooms, levels, imgUrl, year, price, description }) {

        this.id = id
        this.bedrooms = bedrooms || 0
        this.bathrooms = bathrooms || 0
        this.levels = levels || 0
        this.imgUrl = imgUrl || ''
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
            <button class="btn btn-info" onclick="app.carsController.adjustCar('${this.id}')">Adjust Car Settings</button> 
            <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">delete me</button> 
          </div>
        </div>
      </div>
    `
    }
}



export const houseForm = `
<form class="col-10 bg-white p-3 elevation-2" onsubmit="${submitAction}">
    <h3 class="text-primary">List Your Car</h3>
    <div class="row">
      <div class="col-4">
        <label class="form-label" for="make">Make</label>
        <input class="form-control" type="text" minlength="5" id="make" name="make">
      </div>
      <div class="col-4">
        <label class="form-label" for="model">Model</label>
        <input class="form-control" type="text" id="model" name="model">
      </div>
      <div class="col-4">
        <label class="form-label" for="level">Levels</label>
        <input class="form-control" type="number" id="levels" name="levels" min="1999">
      </div>
      <div class="col-4">
        <label class="form-label" for="year">Year</label>
        <input class="form-control" type="number" id="year" name="year" min="1999">
      </div>
      <label class="form-label" for="price">Price</label>
      <input class="form-control" type="number" min="1000" id="price" name="price">
      <label class="form-label" for="img">Image</label>
      <input class="form-control" type="text" id="img" name="img">
      <label class="form-label" for="description">Description</label>
      <textarea class="w-100 form-control" name="description" id="description" rows="5"></textarea>
      <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
    </div>
  </form>
`