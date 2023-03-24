import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import aboutImg from "../../assets/images/about.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";
import Mahakal from "./pdf/pdfmahakal.pdf";
// import Countdown from 'react-countdown';
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery"
const About = () => {
  (function ($) {
    $.fn.countTo = function (options) {
      options = options || {};

      return $(this).each(function () {
        // set options for current element
        var settings = $.extend(
          {},
          $.fn.countTo.defaults,
          {
            from: $(this).data("from"),
            to: $(this).data("to"),
            speed: $(this).data("speed"),
            refreshInterval: $(this).data("refresh-interval"),
            decimals: $(this).data("decimals")
          },
          options
        );

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(settings.speed / settings.refreshInterval),
          increment = (settings.to - settings.from) / loops;

        // references & variables that will change with each update
        var self = this,
          $self = $(this),
          loopCount = 0,
          value = settings.from,
          data = $self.data("countTo") || {};

        $self.data("countTo", data);

        // if an existing interval can be found, clear it first
        if (data.interval) {
          clearInterval(data.interval);
        }
        data.interval = setInterval(updateTimer, settings.refreshInterval);

        // initialize the element with the starting value
        render(value);

        function updateTimer() {
          value += increment;
          loopCount++;

          render(value);

          if (typeof settings.onUpdate == "function") {
            settings.onUpdate.call(self, value);
          }

          if (loopCount >= loops) {
            // remove the interval
            $self.removeData("countTo");
            clearInterval(data.interval);
            value = settings.to;

            if (typeof settings.onComplete == "function") {
              settings.onComplete.call(self, value);
            }
          }
        }

        function render(value) {
          var formattedValue = settings.formatter.call(self, value, settings);
          $self.html(formattedValue);
        }
      });
    };

    $.fn.countTo.defaults = {
      from: 0, // the number the element should start at
      to: 0, // the number the element should end at
      speed: 1000, // how long it should take to count between the target numbers
      refreshInterval: 100, // how often the element should be updated
      decimals: 0, // the number of decimal places to show
      formatter: formatter, // handler for formatting the value before rendering
      onUpdate: null, // callback method for every time the element is updated
      onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
      return value.toFixed(settings.decimals);
    }
  })($);

  $(function ($) {
    // custom formatting example
    $(".count-number").data("countToOptions", {
      formatter: function (value, options) {
        return value
          .toFixed(options.decimals)
          .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
      }
    });

    // start all the timers
    $(".timer").each(count);

    function count(options) {
      var $this = $(this);
      options = $.extend({}, options || {}, $this.data("countToOptions") || {});
      $this.countTo(options);
    }
  });
  useEffect(() => {
    AOS.init({
      easing: "linear",
      once: true,
      // delay: 400,
      duration: 800,
    });
    AOS.refresh()
  }, []);
  return (
    <>
      <section className='about_wrap'>
        <Container >
          <div className='about_title'>
            <h2 className='h2_title'>About Us</h2>
          </div>
          <Row>
            <Col sm={9} md={9} lg={9} xl={9}>
              <div className='about_details_wrap'>
                <div className='about_details_title'>
                  <h3 className='h3_title'>OVER <span>20+ YEARS</span>  OF TRUST AND EXECLLENCE</h3>
                  <p className='pera'>Established in the Year of 2002, Mahakal Cooling Towers is the leading Manufacturer, Wholesaler, and Trader of Cooling Towers and Cooling Tower parts.</p>
                  <figure className='about_img_wrap'>
                    <Image src={aboutImg} alt="about_img" fluid />
                    <div className='about_img_btn_wrap'>
                      <button className='btn about_img_btn'> <a href={Mahakal} download>Download <AiOutlineDownload /></a></button>
                    </div>
                  </figure>
                </div>
                <div className='about_ceo_wrap'>
                  <h4 className='h4_title'>Omkar Panchal</h4>
                  <p className='pera'>DIRECTOR & CEO</p>
                  <div className='about_ceo_sig'>
                    <p className='pera'>Omkar Panchal</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={3} md={3} lg={3} xl={3}>
              <div className='about_details_img_wrap'>
                <figure className='about_details_img'>
                  <Image src={about1} alt='about' fluid data-aos="fade-left"  data-aos-delay="500"/>
                  <h6 className='h6_title'>manufacturers & service providers</h6>
                </figure>
                <figure className='about_details_img'>
                  <Image src={about2} alt='about' fluid data-aos="fade-left"  data-aos-delay="700"/>
                  <h6 className='h6_title'>manufacturers & service providers</h6>
                </figure>
                <figure className='about_details_img'>
                  <Image src={about3} alt='about' fluid data-aos="fade-left"  data-aos-delay="900"/>
                  <h6 className='h6_title'>manufacturers & service providers</h6>
                </figure>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default About