module.exports = {
  date: function(timestamp){
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = `0${date.getMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      format: `${day}/${month}/${year}`
    } //retorno tipo ISO
  }
}