import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdPhoneEnabled } from "react-icons/md";
import Testimonial from "./Testimonal";
import "./MobileView.css";
import "./Homepage.css";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

let data = [
  {
    id: "1",
    heading: "Empathy Driven",
    para: "We listen intently to understand your goals, aspirations, and challenges. Your story is ours to tell, and we do it with sincerity and empathy to deliver complete satisfaction.",
    img: "/Images/Homepage/1.png",
  },
  {
    id: "2",
    heading: "Tailored Solutions",
    para: "Every brand and business is unique, so we customize our approach and make sure that your brand content reflects your unique identity and connects with your targeted audience.",
    img: "/Images/Homepage/2.png",
  },
  {
    id: "3",
    heading: "Quality Assurance",
    para: "From captivating headlines to stimulating content, each sentence, paragraph, and word is precisely chosen, and refined to meet the highest quality standards.",
    img: "/Images/Homepage/4.png",
  },
];

let grid_data = [
  {
    id: "1",
    img: "/Images/Homepage/Group_5.png",
    heading: "Website Content Writing",
    content:
      "From compelling homepage introductions to engaging product descriptions, we craft an online experience that leaves a lasting impression.",
    link: "/website-content-writing-services",
  },
  {
    id: "2",
    img: "/Images/Homepage/Group_6.png",
    heading: "Blogs Content Writing",
    content:
      "Embrace the power of storytelling through our blogs, where every post is an invitation to explore, learn, and engage.",
    link: "/",
  },
  {
    id: "3",
    img: "/Images/Homepage/Group_7.png",
    heading: "Legal Content Writing",
    content:
      "Legal content isn't just information; it's the embodiment of justice. Let our words present your legal prowess with clarity and authority.",
    link: "/legal-content-writing",
  },
  {
    id: "4",
    img: "/Images/Homepage/Group_8.png",
    heading: "Copywriting Service",
    content:
      "Let your brand's story unfold through copy that not only communicates but captivates. In a world inundated with words, stand out with copy that compels, convinces, and converts.",
    link: "/copywriting-services",
  },
  {
    id: "5",
    img: "/Images/Homepage/Group_13.png",
    heading: "Technical Content Writing",
    content:
      "Your technology deserves a voice that speaks fluently to both experts and novices. Our technical content writing service makes the world of technology accessible and engaging for your audience.",
    link: "/technical-content-writing",
  },
  {
    id: "6",
    img: "/Images/Homepage/Group_9.png",
    heading: "Social Media Writing",
    content:
      "Your brand deserves to be heard, shared, and celebrated. Social media is more than updates; it's a language, a connection. Let us be the storytellers who amplify your brand's personality.",
    link: "/",
  },
];

let writer_data = [
  {
    heading: "Deliver the value to Customers",
    para: "Increasing the engagement with your potential customers and audience to position your brand as a valuable contributor in their lives.",
  },
  {
    heading: "Cost-Effective Than Ads",
    para: "Paid ads provide results as long as you have the budget; however, quality content remains for years and becomes a great business asset.",
  },
  {
    heading: "Gain More Credibility & Traffic",
    para: "When humans and search engines both like your brand content then automatically your business starts to gain credibility and quality traffic.",
  },
];

function Homepage() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    window.open("https://calendly.com/contentflux/30min", "_blank");
    // navigate("https://calendly.com/contentflux/30min?month=2025-03", { replace: true });
  };

  const handleClick = () => {
    navigate("/contact");
  };

  useEffect(() => {
    document.title =
      "Best Content Writing Service | Content Writing company | ContentFlux";
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Best Content Writing Service | Content Writing company | ContentFlux
        </title>
        <meta
          name="description"
          content="ContentFlux is the best content writing service that fulfils all content requirements. Our dedicated service ensures that your brand message reaches your audience with the best clarity."
        />
        <link rel="canonical" href="https://thecontentflux.com/" />
      </Helmet>
      <div className="Homepage !h-[600px] sm:!h-[720px] md:!h-[675px]">
        {/* ------- Header ----- */}
        <div className="main_homepage_text !grid-cols-1 sm:!grid-cols-2">
          <div className="main_head_text">
            <h1 className="font-bold !text-xl sm:!text-[35px] text-wrap !leading-10">
              Elevate Your Brand Vision with Premier Content Writing Services
            </h1>
            <p className="pt-7 text-wrap">
              In the world of buzzing information, empower your brand with the
              art of storytelling that captivates, educates, and inspires.
            </p>

            <div className="main_head_contact !flex-col sm:!flex-row gap-5">
              <div
                className="animated-button !min-w-[230px] !py-4"
                onClick={handleNavigation}
              >
                <span className="text">Schedule call</span>
                <span className="icon">
                  <FaLongArrowAltRight />
                </span>
              </div>
              <div onClick={handleClick} className="!min-w-[230px] ">
                <Link to="/contact" className="call-button">
                  <span>Contact Us</span>
                  <MdPhoneEnabled className="icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="!hidden lg:!block">
            <div className="main_image_section">
              <div className="rounded">
                <img src="/Images/Homepage/image6.avif" alt="logoImg" />
              </div>
              <div className="play-button"></div>
              <div className="rounded left">
                <img src="/Images/Image2.jpg" alt="logoImg" />
              </div>
            </div>
            {/* <div>
                        <Slider testimonial_data={testimonial_data} />
                     </div> */}
          </div>
        </div>
      </div>
      {/* <div style={{marginTop:"4.5%"}}>
            <InfinteScrollSlider/>
         </div> */}
      {/* -------- About section ------ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 !pt-7 !pb-16 !px-10">
        <div className="about_wrytr_text ">
          <div className="!pb-3">
            <p className="text-lg sm:!text-2xl lg:!text-[1.7rem] !leading-8">
              Welcome to ContentFlux Content- Where Words Transform Stories
            </p>
            <p className="pt-2 !text-[15px] lg:!text-[16px]">
              At ContentFlux Content we believe the power of words, where we
              focus to create the brand message should reach the target audience
              with the best clarity. Our content writing service makes sure we
              breathe life into the ideas. Our seasoned expertise pen down
              content to create the interest among your audience, optimize them
              with better knowledge so that the brand can make sales.
              Storytelling remains the heartbeat of connection to bring your
              narrative to life.
            </p>
            <div className="main_head_contact !w-fit">
              <div className="animated-button !py-4" onClick={handleClick}>
                <span>Get Quote </span>
                <span className="icon">
                  <FaLongArrowAltRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative !hidden sm:!block min-h-[345px]">
          <div className="bg-[#F1EAFF] absolute w-[399px] h-[265px] sm:w-[459px] sm:h-[305px] xl:w-[509px] xl:h-[345px] rounded-[10px] top-[55px] left-8"></div>
          <div className="absolute w-[399px] h-[265px] sm:w-[459px] sm:h-[305px] xl:w-[509px] xl:h-[345px] top-20 xl:top-24 left-16 xl:left-20">
            <img
              src="/Images/Homepage/image2.jpg"
              alt="workImg"
              className="rounded-[10px]"
            />
          </div>
          <div className="w-[118px] h-[90px] sm:w-[138px] sm:h-[110px] absolute top-5 z-20">
            <img src="/Images/dots3.png" alt="dotsImg" />
          </div>
        </div>
      </div>
      {/* ------ business idea------ */}
      <div className="business_idea">
        <div className="text-lg sm:!text-2xl lg:!text-[1.7rem] !leading-[2.7rem]">
          Content Writing Service That Tells, Sells & Compels.
        </div>
        <div className="business_idea_grid !items-stretch">
          {data.map((item) => (
            <div
              className="flex flex-col items-center justify-between gap-3"
              key={item.id}
            >
              <img
                src={item.img}
                alt="illustration"
                className="w-[162px] h-[162px]"
              />
              <p className="grid_box_heading">{item.heading}</p>
              <p>{item.para}</p>
              <Link
                to="/contact"
                className="read_more_btn animated-button !w-full"
              >
                <span>Learn More</span>
                <span className="icon">
                  <FaLongArrowAltRight />
                </span>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <div
            className="main_head_contact"
            style={{
              width: "220px",
              margin: "auto",
              padding: "35px 0px 45px 0px",
            }}
          >
            <div className="animated-button get-start !py-6">
              <span>Get Started</span>
              <span className="icon">
                <FaLongArrowAltRight />
              </span>
            </div>
          </div>
        </Link>
      </div>
      {/* ------ Strategy ------ */}
      <div className="stratgy">
        <div className="stratgy_heading">
          <div className="text-lg sm:!text-2xl lg:!text-[1.7rem] !leading-8 !text-center sm:!text-left">
            Beyond Words: Empowering Your Vision, Mission & Values
          </div>
          <div>
            We understand that every idea carries a certain dream and vision and
            waiting for the medium to be unveiled. Our dedicated content-writing
            service ensures it makes the best impressions. We harness the art of
            storytelling to create and share compelling narratives.
          </div>
        </div>
        <div className="stratgy_boxes !grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3 !gap-5 xl:!gap-[45px]">
          {grid_data.map((item) => (
            <div key={item.id}>
              <img src={item.img} height="80px" width="80px" alt="iconsImg" />
              <Link to={item.link} className="font-semibold !text-[19px]">
                <h3 className="pt-5">{item.heading}</h3>
              </Link>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
        <div className="stratgy_boxes !pt-3 !pb-10 !gap-7 xl:!gap-[45px]">
          {writer_data.map((item, i) => (
            <div
              style={{
                padding: "0px",
                boxShadow: "none",
                background: "transparent",
              }}
              key={item}
            >
              {/* <div className='check_mark'><GiCheckMark/></div> */}
              <img
                src="/Images/Homepage/Group_1.png"
                className="w-[60px] h-[60px] xl:w-[0px] xl:h-[80px] !mb-3"
                alt="iconsImg"
              />
              <h4>{item.heading}</h4>
              <p>{item.para}</p>
              <br />
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "#364541 !important" }}
              >
                <p
                  className="read_more_btn color-white animated-button"
                  style={{
                    color: "#364541 !important",
                    justifyContent: "flex-start",
                  }}
                >
                  <span>Learn More</span>
                  <span className="icon">
                    <FaLongArrowAltRight />
                  </span>
                </p>
              </Link>
              <br />
              <hr />
            </div>
          ))}
        </div>
      </div>
      {/* -------- Testimonial -------- */}
      <div className="testimonial_section">
        <Testimonial />
      </div>

      {/* -------- traffice visitors ------ */}
      <div className="traffic">
        <div className="visitors pb-5">
          <div>
            <h1>
              We focus on Building Interest, Optimize & Make Sales With the best
              Words with best Clarity
            </h1>
            <Link
              to="/contact"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="main_head_contact !h-[75px]"
                style={{ justifyContent: "center", textDecoration: "none" }}
              >
                <div className="contact-visitor animated-button">
                  <span>Contact US</span>
                  <span className="icon" style={{ paddingTop: "5px" }}>
                    <FaLongArrowAltRight />
                  </span>
                </div>
              </div>{" "}
            </Link>
          </div>
        </div>
      </div>
      {/* ------ ends tranffice ------ */}

      {/* ----- wryter ----- */}
      <div className="wryter_section">
        <div>
          <h2>
            We make sure that the content we create is for the people, by the
            people to inspire the people.
          </h2>
          <p>
            <strike>No AI or Bot generated Content</strike>
          </p>
        </div>
        <div className="wryter-image">
          <div>
            <img src="../Images/dots3.png" alt="dotted" />
          </div>
          <div>
            <img src="../Images/Homepage/image3.jpg" alt="women" />
          </div>
        </div>
      </div>
      {/* ------ wryter ends ------ */}
    </>
  );
}

export default Homepage;
