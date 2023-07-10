import React from "react";
import MyItem from "./MyItem";
import Image1 from "./Images/menclothes.jpg"
import Image2 from './Images/womenclothes.jpg'
import Image3 from './Images/jewelry.jpg'
import Image4 from './Images/bags.jpg'

 const list=[
    {id:1,Title:'mens casual slim fit',Price:500 ,description:' Training Dri-FIT 5inch shorts in gray',Image:Image1},
    {id:2,Title:'women dress',Price:700 ,description:' summer dress for women',Image:Image2},
    {id:3,Title:'women earring',Price:780,description:' gold earring',Image:Image3},
    {id:4,Title:'bag for men & women',Price:125,description:'leather bag',Image:Image4},
];
function ItemList(){
   
    return(
        <>




       
                <MyItem
                Id={list[0].id}
                   Title={list[0].Title}
                   Price={list[0].Price}
                   description= {list[0].description}
                  Image={list[0].Image}
                />
            
                <MyItem
                 Id={list[1].id}
                Title={list[1].Title}
                Price={list[1].Price}
                description= {list[1].description}
               Image={list[1].Image}
              />
            
                <MyItem
                 Id={list[2].id}
 Title={list[2].Title}
 Price={list[2].Price}
 description= {list[2].description}
Image={list[2].Image}
                      />
            
                <MyItem
                 Id={list[3].id}
                 Title={list[3].Title}
                 Price={list[3].Price}
                 description= {list[3].description}
                Image={list[3].Image}
                     />
       
        </>
    )

}
export default  ItemList;