import Header from "../components/Header";
import DisplayEmployee from "../components/DisplayEmployee";
import "./Home.scss";

function Home() {
  return (
    <div className="homeBox">
      <Header />
      <DisplayEmployee />
    </div>
  );
}
export default Home;
