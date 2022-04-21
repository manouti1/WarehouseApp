export interface Location {
  lat: string;
  long: string;
}

export interface Vehicle {
  _id: number;
  make: string;
  model: string;
  year_model: number;
  price: number;
  licensed: boolean;
  date_added: string;
}

export interface Cars {
  location: string;
  vehicles: Vehicle[];
}

export interface WarHouses {
  _id: string;
  name: string;
  location: Location;
  cars: Cars;
}
