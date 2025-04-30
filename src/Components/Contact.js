const   Contact=()=>{
    return( <div>
        <h1 className="font-bold p-4 m-4">CONTACT US</h1>
        
        {/* <h2>HOW CAN I HELP U..!!!!!</h2> */}
        <div>
            <form>
                <input type="text" name="name" placeholder="name" className="border border-black p-2 m-2"/>
                <input type="text" placeholder="emailaddress" name="emailaddress" className="border border-black p-2 m-2"/>
                <button className="border border-black p-2 m-2 bg-amber-200">Submit</button>
            </form>
        </div>
    </div>)


}
export default Contact