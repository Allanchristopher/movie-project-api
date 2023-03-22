export const userData=[
    {
        id: 1,
        username: "allan",
        password: "allan",
    }
]


export function validUser(username){
    return userData.find((user)=>user.username === username)
}
export function validPassword(password){
    return userData.find((user)=>user.password === password)
}