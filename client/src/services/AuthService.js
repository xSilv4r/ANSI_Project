import jwt from 'jsonwebtoken'

export function getToken(){
    return localStorage.getItem('token')
}

export function decodeToken(){
    const token = getToken().split(' ')[1]
    if(!token){
        return null
    }
    return jwt.decode(token)
}

export function getUsername(){
    const token = decodeToken()
    if(!token){
        return null
    }
    return token.name
}

export function getId(){
    const token = decodeToken()
    if(!token){
        return null
    }
    return token.id
}
