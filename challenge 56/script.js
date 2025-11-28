function diaSeguinte(data) {
    const dataObj = new Date(data)
    dataObj.setDate(dataObj.getDate() + 1)
    return dataObj.toISOString().split('T')[0]
}

console.log(diaSeguinte("2023-12-31"))