
const list = ["test", "test", "test", "test", "test", "test", "test", "test", "test", "test"
    , "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test"
    , "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test", "test"];

const getSearchQuery = (req, res) => {
    res.status(200).send(list);
};

module.exports = {
    getSearchQuery,
}