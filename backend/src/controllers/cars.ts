import { NextFunction, Request, Response } from "express";
import * as fs from "fs";
import { Vehicle, WarHouses } from "../models/Response";

const sortAllCarsByDateAsc = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = fs.readFileSync("data/warhouses.json", "utf8");
  const jsonObj = JSON.parse(result);
  const response: WarHouses[] = <WarHouses[]>jsonObj;
  const vehicles: any = [];

  response.forEach((item) => {
    for (let i = 0; i < item.cars.vehicles.length; i++) {
      item.cars.vehicles[i] = Object.assign(item.cars.vehicles[i], {
        datawarehouse: {
          warehouse_id: item._id,
          warehouse_lat: item.location.lat,
          warehouse_lng: item.location.long,
          warehouse_location: item.cars.location,
          warehouse_name: item.name,
        }
      });
    }
    vehicles.push(item.cars.vehicles);
  });

  // eslint-disable-next-line prefer-spread
  const flatArray = [].concat.apply([], vehicles);
  flatArray.sort((a: Vehicle, b: Vehicle) => {
    if (a.date_added < b.date_added) return 1;
    if (a.date_added > b.date_added) return -1;
    return 0;
  });

  return res.status(200).json({
    data: flatArray,
  });
};

export default { sortAllCarsByDateAsc };
