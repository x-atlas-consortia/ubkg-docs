export const toId = (val) => {
    return val.toLowerCase().replace(/[\W_]+/g, " ").trim().replaceAll(' ', '-')
}

