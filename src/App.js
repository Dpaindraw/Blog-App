import Blog from "./Blog";
import Search from "./Search";
import User from "./User";
import Reviews from "./Reviews";
import Button from "./Button";
import Title from "./Title";

function App(){
  return(
    <div>
      <h1>
        Blog App
      </h1>
      <Button {title}/>
      <Search />
      <Title title = "title" /> 
      <Reviews name="dipen" rating = "2" description = "whatis this" />
      <Reviews rating = "2" description = "whatis this" />
      <User Name ="admin" Role = "123"/>
      <Blog title ="Blog title 1" description = "New Description" />
      <Blog title ="Blog title 2" description = "New Description" />
      <Blog title ="Blog title 3" description = "New Description" />
      <Blog title ="Blog title 4" description = "New Description" />
      <Blog title ="Blog title 5" description = "New Description" />
      <Blog title ="Blog title 6" description = "New Description" />
      
    </div>
  );
}


export default App;