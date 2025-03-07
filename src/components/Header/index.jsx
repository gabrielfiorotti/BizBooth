import "./style.css";
import gamesroomLogo from "../../assets/gamesroom.jpg";

const Header = () => {
  return (
    <header>
      {/* <h1>Biz Booth</h1> */}
      <img src={gamesroomLogo} alt="theGamesRoomLogo" />
    </header>
  );
};

export default Header;
