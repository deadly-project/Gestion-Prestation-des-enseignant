export async function get(req, res) {
    res.status(200).json({message: "Get"})
        console.log('get')
}
export async function post(res, req) {
    res.status(200).json({message: "Post"})
        console.log('post')
}
export async function put(res, req) {
    res.status(200).json({message: "Put"})
        console.log('put')
}
export async function remove(res, req) {
    res.status(200).json({message: "Remove"})
        console.log('Remove')
}
export async function test(){

}