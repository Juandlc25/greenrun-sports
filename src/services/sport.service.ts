import http from "../helpers/http-common";
import { SportModel } from "../models/sport.model";

class SportService {
  getAll() {
    return http.get<Array<SportModel>>("/json/2/all_sports.php");
  }
}

export default new SportService();
