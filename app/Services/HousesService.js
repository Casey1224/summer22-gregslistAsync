import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";
import { api } from "./AxiosService.js";

class HousesService {
    async editHouse(houseData) {
        let res = await api.put(`/houses/${houseData.id}`, houseData)
        let house = new House(res.data)
        let houseIndex = ProxyState.houses.findIndex(h => h.id == houseData.id)
        ProxyState.houses.splice(houseIndex, 1, house)
        ProxyState.houses = ProxyState.houses
    }

}