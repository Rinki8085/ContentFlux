import React, { useEffect } from "react";
import Services from "./Services";
import "./ArticleWriter.css";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
const services = [
  {
    img: "/Images/service_page/writing_icon1.jpg",
    alt: "writing1",
    title: "Article Writing Services",
    desc: "Persuasive, engaging, and SEO-friendly articles that drive customers to take action.",
  },
  {
    img: "/Images/service_page/writing_icon2.jpg",
    alt: "writing2",
    title: "SEO Blog Writing Services",
    desc: "Affordable, professional blog writing services tailored to your audience.",
  },
  {
    img: "/Images/service_page/writing_icon3.jpg",
    alt: "writing3",
    title: "Website Content Writing Services",
    desc: "Clear, concise, and engaging website content that informs, educates, and guides visitors.",
  },
  {
    img: "/Images/service_page/writing_icon4.jpg",
    alt: "writing4",
    title: "SEO Content Writing Services",
    desc: "Content optimized for search engines to boost visibility and website traffic.",
  },
  {
    img: "/Images/service_page/writing_icon5.jpg",
    alt: "writing5",
    title: "Technical Writing Services",
    desc: "Expert technical content crafted with clarity and precision for complex topics.",
  },
  {
    img: "/Images/service_page/writing_icon6.jpg",
    alt: "writing6",
    title: "Product Description",
    desc: "Compelling and SEO-friendly product descriptions that enhance e-commerce strategies.",
  },
];

const Copywriter = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    window.open("https://calendly.com/contentflux/30min", "_blank");
    // navigate("https://calendly.com/contentflux/30min?month=2025-03", { replace: true });
  };

  const handleClick = () => {
    navigate("/contact");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title =
      "Professional Copywriting Services | Captivating Content That Converts";
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Professional Copywriting Services | Captivating Content That Converts
        </title>
        <meta
          name="description"
          content="Boost your brand with our expert copywriting services. We craft compelling, persuasive content that engages your audience and drives conversions."
        />
        <link
          rel="canonical"
          href="https://thecontentflux.com/copywriting-services"
        />
      </Helmet>
      <Services text={"Copy Writer"}>
        <div className="article-writer">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <h3 className="font-semibold text-xl">High-Quality Content</h3>
              <img
                src="/Images/service_page/service_icon1.jpg"
                alt="service_icon1"
              />
            </div>
            <p>
              We believe that quality always trumps quantity when it comes to
              any form of content. Our creative writers are dedicated to
              crafting content that exceeds your expectations, and we’ll make
              revisions until you’re completely satisfied. You can trust us to
              take care of the quality, so you can focus on your business.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-3">
              <h3 className="font-semibold text-xl">Support 24/7</h3>
              <img
                src="/Images/service_page/service_icon2.jpg"
                alt="service_icon1"
              />
            </div>
            <p>
              We believe that quality always trumps quantity when it comes to
              any form of content. Our creative writers are dedicated to
              crafting content that exceeds your expectations, and we’ll make
              revisions until you’re completely satisfied. You can trust us to
              take care of the quality, so you can focus on your business.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-3">
              <h3 className="font-semibold text-xl">Tight Deadlines</h3>
              <img
                src="/Images/service_page/service_icon3.jpg"
                alt="service_icon1"
              />
            </div>
            <p>
              We believe that quality always trumps quantity when it comes to
              any form of content. Our creative writers are dedicated to
              crafting content that exceeds your expectations, and we’ll make
              revisions until you’re completely satisfied. You can trust us to
              take care of the quality, so you can focus on your business.
            </p>
          </div>
        </div>
        {/* who we are */}
        <div className="article-box1 !items-center">
          <div>
            <img src="/Images/service_page/Copywriting1.png" alt="" className="!w-full max-w-[480px] max-h-[480px] h-full mx-auto" />
          </div>
          <div className="who_we">
            <h3 className="font-semibold text-xl mb-3">Who we are</h3>
            <p>
              Find out why our customers love us more than any other Branding
              Content Service Provider.
            </p>
            <div>
              <p>
                Digiorbits Services strives to provide businesses and
                professionals with top-notch, unique, and error-free content in
                order to aid them in achieving success and creating a notable
                online presence. Not only do we specialize in content creation,
                but we also execute extensive market research and analysis to
                deliver our customers complete content solutions.
              </p>
              <p>
                Our knowledgeable SEO experts are well-versed in various digital
                marketing tactics and are able to offer organic search engine
                optimization services to ensure that your website remains at the
                forefront of SERPs (Search Engine Results Pages), allowing you
                to maximize your returns. Quality is essential for us here at
                Digiorbits Services; hence, it is our mission to provide only
                the finest quality of content at competitive prices. Try us out
                today!
              </p>
              <button onClick={handleNavigation}>Get Free Consultation</button>
            </div>
          </div>
        </div>
        {/* content done */}
        <div className="article-box2">
          <h3 className="font-semibold text-xl mb-3">Get Your Content Done with Digiorbits</h3>
          <p>
            Whether you’re a individual, little business or a large corporation,
            we provide a comprehensive range of services to meet your needs. We
            provide 100% plagiarism passed content.
          </p>
          <center>
            <button onClick={handleClick}>Try Our Service</button>
          </center>
          <div className="service-types">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center gap-3 group">
                <img src={service.img} alt={service.alt} className={`group-hover:!shadow-lg !rounded-full`}/>
                <h3 className="font-semibold text-lg">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* helping brands */}
        <div className="article-box3 !items-center">
          <div>
            <img
              src="/Images/service_page/Copywriting2.png"
              className="!w-full max-w-[480px] max-h-[480px] h-full mx-auto"
              alt=""
            />
          </div>
          <div className="help-brands">
            <h3 className="font-semibold text-xl mb-3">We Help Your Brands Meet Your Targets</h3>
            <p>
              We understand how challenging it can be to start and manage a
              business, so we strive to provide assistance with content creation
              and publication that is tailored to fit your business plan.
            </p>
            <div>
              <img
                src="/Images/service_page/brand_icon1.png"
                alt="brand_icon"
                className="!w-[50px] !h-[50px]"
              />
              <div>
                <h3 className="font-semibold mb-3">Make a Brand Voice</h3>
                <p>
                  Having a strong brand voice is essential when hiring a
                  professional content service provider. Here at DigiOrbits, our
                  experienced content writers understand different business
                  perspectives, enabling us to help you experience your digital
                  brand in a new way. With our expert team of professionals,
                  your brand comes to life with clarity and authenticity. Let us
                  take your business to the next level by empowering your unique
                  message and making it heard.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/Images/service_page/brand_icon2.png"
                alt="brand_icon"
                className="!w-[50px] !h-[50px]"
              />
              <div>
                <h3 className="font-semibold mb-3">Dedicated Content Writer</h3>
                <p>
                  We write various types of web content, from creative articles
                  to SEO content writing, as per your requirement. Our
                  professionals have great knowledge of making a solid online
                  presence and writing an article according to the reader's
                  choice and taste
                </p>
              </div>
            </div>
          </div>
        </div>
      </Services>
    </>
  );
};

export default Copywriter;
