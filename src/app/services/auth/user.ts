interface location{
    Country:string
    CountryCode:string,
    Locality:string
}
export interface User {
    Id:string,
    Name:string,
    Email:string,
    Phone:string,
    Password:string,
    Location: location
    Interests:Array<string>
}
