type CityType = {
  id?: number,
  name?: string,
  location?: string,
  coord?: CoordsType
}

interface ICityProps {
  city: CityType
}


