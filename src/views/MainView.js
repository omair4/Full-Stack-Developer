import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Ellipse from "../assets/img/Ellipse.png";
import Ellipse1 from "../assets/img/Ellipse-1.png";
import { useEffect, useState } from "react";
const AdminView = (props) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes,setMinutes]=useState(0)
  const [hours,setHours]=useState(0)
  useEffect(() => {
    const secondsInterval = setInterval(() => {
      if(seconds<360)
		setSeconds((prev)=>prev+1)
		else
		setSeconds(0)
    }, 1000);

	const minutesInterval = setInterval(() => {
		if(minutes<60)
		  setMinutes((prev)=>prev+1)
		  else
		  setMinutes(0)
	  }, 1000 *60);
	  const hoursInterval = setInterval(() => {
		if(hours<12)
		  setHours((prev)=>prev+1)
		  else
		  setHours(0)
	  }, 1000 *60*60);

    return () => {
		clearInterval(hoursInterval)
		clearInterval(minutesInterval)
		clearInterval(secondsInterval);}
  }, []);
  return (
    <>
      <Container>
        <Row className="align-items-center justify-content-center mt-5">
          <Col className="outer-container">
            <img className="clock-dashed-1" src={Ellipse} alt=""></img>
            <img className="clock-dashed-2" src={Ellipse1} alt=""></img>
            <div style={{transform: `rotate(${seconds}deg)`}} className="second-needle"></div>
            <div style={{transform: `rotate(${minutes*5}deg)`}} className="minute-needle"></div>
            <div  className="hour-needle"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminView;
