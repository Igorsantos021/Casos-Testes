function ValidarEmail(email) {
    const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i


    return re.test(email)
}

module.exports = ValidarEmail