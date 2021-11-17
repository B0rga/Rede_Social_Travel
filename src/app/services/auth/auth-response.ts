export interface AuthResponse {
    user: {
        id: number,
        name: string,
        email: string,
        phone:string,
    }
    acesstoken: string,
    expiresin: number
}
