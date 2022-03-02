
const getEntries = async (req, res, next) => {
    await res.status(200).send(['Entries Get Endpoint']);
};

const getEntries2 = async (req, res, next) => {
    const value = ["getEntries2"]  ;
    await res.status(200).send(value);
}

module.exports = {
    getEntries,
    getEntries2
}