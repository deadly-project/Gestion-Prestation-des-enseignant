export async function get(req, res) {
    res.status(200).json({message: "Get"})
        console.log('get')
}
export async function post(req, res) {
    res.status(200).json({message: "Post"})
        console.log('post')
}
export async function put(req, res) {
    res.status(200).json({message: "Put"})
        console.log('put')
}
export async function remove(req, res) {
    res.status(200).json({message: "Remove"})
        console.log('Remove')
}
export async function test(){

}