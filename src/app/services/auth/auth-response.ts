export interface AuthResponse {
    User: {
        Id: number,
        Name: string,
        Email: string,
        Phone:string,
    }
    Access_token: string,
    Expires_in: number
}
