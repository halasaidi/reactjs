import React ,{useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Myitem.css"

function MyItem(props){
const [Item,setItem]=useState(true)
const [Price,setprice]=useState(props.Price)
function Addtocart(){
   let message='do you want to continue ?'
   let userRespomse= window.confirm(message)

   if (userRespomse === true ){
    alert('good lets continue')
         setItem((Prev)=>!Prev) 
         alert('item added to cart ')
   }
  else{
    alert('we will stop,thank you');
    window.alert=function(){}
  }


    
 
}
function Gitdiscount(){
  setprice(Price-(Price*.10))
}
return(
<>

{Item &&(
<Card  className="card"  style={{ width: '18rem' }} >

      <Card.Img variant="top" src={props.Image} />
      <Card.Body>
     
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
 {props.description}
 
        </Card.Text>
        <Card.Text>{Price}</Card.Text>
        <div className="button ">
              <Button variant="primary" onClick={Addtocart}>Add to cart</Button>
       
        <Button variant="primary" onClick={Gitdiscount}>git 10% discount </Button>

        </div>
      </Card.Body>
    </Card>
   ) }

</>
)

}
export default MyItem