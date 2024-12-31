/* eslint-disable react/prop-types */
const Contact=(props)=>{
    function handleclick (){
        alert ("you visiting this page..")
    }
    return(
        <section>
        <h1>This is Contact page.</h1>
        <button className="button" onClick={handleclick} style={{textAlign:"center"}}> click me</button>
        <footer className="foot">
            <p><strong>Name: {props.name}</strong></p>
            <p><strong> Email: {props.email}</strong></p>
            <p><strong>Contact: {props.contact}</strong></p>
            <p className="copy"><strong>
            &copy; {new Date().getFullYear()} All rights reserved.
            </strong></p>
        </footer>
       
        </section>
    );
}
export default Contact