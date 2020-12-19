import Axios from 'axios'
const host = {
    heroku: "//pldds-beta.herokuapp.com",
    localhost: "//3.19.218.209:8080/"

}
export default Axios.create({
    baseURL:host.localhost
})
