export const toId = (val) => {
    return val.toLowerCase().replace(/[\W_]+/g, " ").trim().replaceAll(' ', '-')
}

export const toUpperCaseFirst = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1)
}