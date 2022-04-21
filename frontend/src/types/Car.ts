import type DataWareHouse from "./DataWareHouse";

interface Car {
  _id: number;
  make: string;
  model: string;
  year_model: number;
  price: number;
  licensed: boolean;
  date_added: string;
  datawarehouse: DataWareHouse;
}

export default Car;
