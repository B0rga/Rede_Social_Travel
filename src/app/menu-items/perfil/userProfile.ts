export interface userProfile{
    followersCount: number
    followingCount: number
    id: string
    location: location
    name: string
    profileBannerUrl: string
    profileImageUrl: string
    publicationCount: Number
    registeredAt: string

}
interface location{
    country: string 
    countryCode: string, 
    locality: string
}