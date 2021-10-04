export interface AuthResponse {
    user: {
        Id: number,
        Name: string,
        Email: string,
        Access_token: string,
        Expires_in: number
    }
}
