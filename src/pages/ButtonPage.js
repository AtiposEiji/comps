import { GoBell } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {

    const handleClick = () => {
        console.log("Click");
    }

    return (
        <div>
            <div>
                <Button primary rounded outline className="mb-5" onClick={handleClick}>
                    <GoBell />
                    Click Here!
                </Button>
            </div>
            <div>
                <Button secondary rounded outline>Click Here! 2</Button>
            </div>
            <div>
                <Button success outline>Click Here! Success</Button>
            </div>
            <div>
                <Button warning outline>Click Here! Warning</Button>
            </div>
            <div>
                <Button danger outline>Click Here! Danger</Button>
            </div>
        </div>
    )
}

export default ButtonPage;