import React from "react";
import { useParams } from "react-router-dom";

const course_list = [
    
    {
        "id": "Python",
        "title": "Fullstack Python devleoper",
        "description": "Python for beginners. Best Python course for non cs background students like B Com, BSc Mathematics, BSc Physics.",
       
    },
    {
        "id": "PHP",
        "title": "Fullstack PHP devleoper",
        "description": "PHP for beginners. Best Python course for non cs background students like B Com, BSc Mathematics, BSc Physics.",
    
    },
    {
        "id": "Flutter",
        "title": "Flutter developer",
        "description": "Flutter for beginners. Best Flutter course for non cs background students like B Com, BSc Mathematics, BSc Physics.",

    }
]

function Courses(){
    let params = useParams();
 
   let seletctedCourse = course_list.filter((data)=>{
    return (data.id===params["id"])
   });
   const currentCourse = seletctedCourse[0];
    return(
        <div>
            <center><h1 style={{margin:"0px"}}>{currentCourse.title}</h1></center>
            <div style={{padding:"10%", textAlign:"center"}}>
            
                {currentCourse.description}
            </div>
        </div>
    );
}

export default Courses;