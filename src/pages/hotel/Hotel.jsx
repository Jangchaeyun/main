import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction ==="l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
        <div className="hotelContainer">
          {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg"/>
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")}/>
          </div>}
          <div className="hotelWrapper">
            <button className="bookNow">지금 예약하기</button>
            <h1 className="hotelTitle">그랜드 호텔</h1>
            <div className="hotelsAddress">
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>엘튼 스트리트 125 뉴욕</span>
            </div>
            <span className="hotelDistance">
              좋은 위치 - 중심에서 500m
            </span>
            <span className="hotelPriceHighlight">
              이 숙박 시설에서 145,206원 이상 숙박을 예약하고 무료 공항 택시를 받으세요
            </span>
            <div className="hotelImages">
              {photos.map((photo, i)=>(
                <div className="hotelImgWrapper">
                  <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">도시 중심부에 머무르세요!!!</h1>
                <p className="hotelDesc">
                  무료 와이파이. 객실은 견목 바닥으로 마감되어 있으며,
                  전자레인지 등이 완비된 간이 주방, 평면 TV,
                  샤워 시설과 헤어드라이어가 구비된 전용 욕실이 있습니다.
                  냉장고는전기 주전자와 커피 머신도 제공됩니다. 
                  아파트 인근의 인기 명소로는 클로스 홀, 중앙 시장 광장,
                  시청 타워 등이 있습니다. 
                  가장 가까운 공항은 16.1km 떨어진 요한 바오로 2세 크라쿠프-발리체 국제공항이며, 숙소는 유료 공항 셔틀 서비스를 제공합니다.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>9박 숙박에 딱!</h1>
                <span>
                  크라쿠프의 중심부에 위치한 이 숙소는우수한 위치 점수 7.7!!
                </span>
                <h2>
                  <b>1,198,538원</b> (9박)
                </h2>
                <button>지금 예약하세요!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>
  );
};

export default Hotel;