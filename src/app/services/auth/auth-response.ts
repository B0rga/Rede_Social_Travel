export interface AuthResponse {
    user: {
        id: number,
        name: string,
        email: string,
        phone:string,
    }
    token: string,
    refreshToken:string,
    expiresin: number
}
