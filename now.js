module.exports = {
    now: (req, res, next) => {
        console.log(`${new Date().toLocaleString()} | ${req.method} from ${req.url}`)
    }
}