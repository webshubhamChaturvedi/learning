import React, { useState, useEffect } from "react";

const ScrollableSlider = () => {
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight;

      const opacity = scrollTop === maxScrollTop ? 0 : 1;
      setScrollOpacity(opacity);

      // Calculate the current section based on the scroll position
      const sectionHeight = maxScrollTop / 3;
      const section = Math.floor(scrollTop / sectionHeight);
      console.log(section);
      setCurrentSection(section);
      // alert("hello");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageUrls = [
    "https://previews.123rf.com/images/dirkercken/dirkercken1403/dirkercken140301608/26969352-links-online-internet-web-page-link-linking-websites-and-webpages-icon-or-button.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WPUsWyz3pc9OV2vhf_qn6tWUCNqX-7_zNRxxmfEW09eAoZS1mXP3iAquKtPvGg3NltU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwP5sLTqU5GUgQCses6XMRKrZG_CNnAEdPtHy3drsewqIGfnZMARlILYa4KIuo2ybMWEU&usqp=CAU",
  ];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{ flex: "0 0 50%", height: "100%", backgroundColor: "white" }}
      >
        {/* Content for the slider */}
        <div style={{ height: "100%", backgroundColor: "red" }}></div>
        <div style={{ height: "100%", backgroundColor: "green" }}></div>
        <div style={{ height: "100%", backgroundColor: "blue" }}></div>
      </div>
      <div style={{ flex: "0 0 50%", position: "sticky", top: 0 }}>
        {/* Sticky image with fade effect */}
        <img
          src={imageUrls[currentSection]}
          alt="Thumbnail"
          style={{
            opacity: scrollOpacity,
            transition: "opacity 0.5s ease-in-out",
            height: "100px",
            width: "100px",
          }}
        />
      </div>
    </div>
  );
};

export default ScrollableSlider;
