import Counter from "./Counter"
import CourseCard from "./CourseCard"
import Post from "./Post"
import Product from "./Product"
import ProfileCard from "./ProfileCard"
import StudentCard from "./StudentCard"


function App() {
  return(
    <div>
      <div>
        <h3>Detyra 1</h3>
        <ProfileCard name={"Xhenis"} age={"18"} city={"vushtrri"}/>
        <ProfileCard name={"filan"} age={"15"} city={"mitrovice"}/>
        <ProfileCard name={"fisteku"} age={"12"} city={"prishtine"}/>
      </div>
      <hr />
      <div>
        <h3>Detyra 2</h3>
        <CourseCard title={"React JS"} instructor={"Egzon"} duration={"2 month"} price={"100$"} />
        <CourseCard title={"HTML"} instructor={"Xhenis"} duration={"5 month"} price={"400$"} />
        <CourseCard title={"CSS"} instructor={"Filani"} duration={"4 month"} price={"200$"} />
      </div>
      <hr />
      <div>
        <h3>Detyra 3</h3>
        <Counter/>
      </div>
      <hr />
      <div>
        <h3>Detyra 4</h3>
        <Post author={"Xhenis"} text={"hello this is a post"}/>
      </div>
      <hr />
      <div>
        <h3>Detyra 5</h3>
        <StudentCard name={"Xhenis"} course={"React js"}/>
        <StudentCard name={"Filani"} course={"Html"}/>
        <StudentCard name={"Fisteku"} course={"Css"}/>
      </div>
      <hr />
      <div>
        <h3>Detyra 6</h3>
        <Product name={"loptop"}/>
      </div>

    </div>
    
  )
}

export default App
