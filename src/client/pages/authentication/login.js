export default function login(){
    return(
        <div>
        <h1 className="text-3xl font-bold flex-col flex justify-center items-center bg-black text-white"> Log In </h1>
        <div className="border rounded px-4 py-7 my-7 w-max mx-auto shadow-inner border-black">
            <input className="w-2/3 my-1 p-2 rounded focus:ring-1 focus:outline-none border" placeholder="Username"></input>
            <input className="w-2/3 my-1 p-2 rounded focus:ring-1 focus:outline-none border" type="password" placeholder="Password"></input>
            <br></br>
            <button className="p-2 bg-blue-600 text-white border-black border rounded px-6 font-bold">Log In</button>
        </div>
        </div>
            
    )
}