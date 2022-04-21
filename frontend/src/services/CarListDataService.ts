import http from "./http-common";
class CarListDataService {
    getByDateAsc(): Promise<any> {
        return http.get("/cars/getByDateAsc");
    }
}
export default new CarListDataService();
