import { useNavigate } from "react-router-dom";
import { Backbtn, Logout } from "./contrast/button.jsx"
import { MainContainer } from "./generalStyle.js";

const Home = () => {
    const navigate = useNavigate()
    function backFunction() {
        navigate(-1);
    }
    return (
        <MainContainer>
            <button onClick={backFunction}>Back
            </button>
            <div> home page</div>
            <button onClick={Backbtn}>Back Btn</button>

            <Logout />
        </MainContainer>
    )
}

export default Home