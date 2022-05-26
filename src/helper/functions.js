

export const keyGenerator= (text, type)=>{
    const randomNum = Math.random()
    return `${text} ${type} ${randomNum}`
}