import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/router";
import styles from "./plan.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';

const Plans = () => {

  const router = useRouter();
  return (
    <section id="pricing" className="pricing sections-bg" style={{ background: "#000", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <div className={styles.chooseYourPlan}>CHOOSE YOUR PLAN</div>
        </div>
        <br /><br />
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          slidesPerView={1} // Show one slide at a time on mobile
          breakpoints={{
            // Responsive breakpoints
            768: {
              slidesPerView: 3, // Show three slides at a time on desktop
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true,
          }}
          pagination={true}
          className="mySwiper"
        >
          <div class="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay="100">

            <div class="col-lg-4">
              <div class="pricing-item" >
                <SwiperSlide className='slider'>
                  <br />
                  <h3 className='text-light'>Monthly</h3>
                  {/* <div class="icon"> */}
                  <img
                    className={styles.streamingTvApp1Icon}
                    alt=""
                    src="/streamingtvapp-1@2x.png"
                  />
                  <br />
                  <h4 className='fs-4 text-light'>Rs.200/month</h4>
                  <ul >
                    <li className='text-light'><i class="bi bi-check mx-auto" ></i> 1080P Resolution</li>
                  </ul>
                  <div class="buy-btn text-center mx-auto bg-light" onClick={() => router.push('/signup/payment')}>SUBSCRIBE</div>

                </SwiperSlide >
              </div>
            </div>

            <div class="col-lg-4">
              <div class="pricing-item featured">
                <SwiperSlide className='slider'>
                  <br />
                  <h3 className='text-light'>Half Yearly</h3>
                  <img
                    className={styles.watchingAMovie1Icon}
                    alt=""
                    src="/watchingamovie-1@2x.png"
                  />
                  <br />
                  <h4 className='fs-4 text-light'>Rs.960/6months</h4>
                  <ul >
                    <li className='text-light'><i class="bi bi-check mx-auto" ></i> 1080P Resolution</li>
                    <li className='text-light'><i class="bi bi-check mx-auto" ></i> 0 Buffering</li>
                    <li className='text-light'><i class="bi bi-check mx-auto" ></i>Live Streaming</li>
                  </ul>
                  <div class="buy-btn text-center mx-auto bg-light" onClick={() => router.push('/signup/payment')}>SUBSCRIBE</div>
<br /><br /><br /><br /><br />
                </SwiperSlide >
              </div>
            </div>
            <div class="col-lg-4">
              <div class="pricing-item">
                <SwiperSlide className='slider'>
                  <br />
                  <h3 className='text-light'>Yearly</h3>
                  <img className={styles.watching1Icon} alt="" src="/watching-1@2x.png" />
                  <h4 className='fs-4 text-light'>Rs.1440/1Year</h4>
                  <ul >
                    <li className='text-light'><i class="bi bi-check mx-auto " ></i> 1080P Resolution</li>
                    <li className='text-light'><i class="bi bi-check mx-auto " ></i> 0 Buffering</li>
                    <li className='text-light'><i class="bi bi-check mx-auto  " ></i>Live Streaming</li>
                  </ul>
                  <div class="buy-btn text-center mx-auto bg-light" onClick={() => router.push('/signup/payment')}>SUBSCRIBE</div>
                  {/* <div class="text-center"><a href="#" class="buy-btn">Buy Now</a></div> */}
                </SwiperSlide >
              </div>
            </div>
          </div>
        </Swiper>

      </div> 
    </section>
    // <div className={styles.rectangleParent}>
    //   <div className={styles.chooseYourPlan}>CHOOSE YOUR PLAN</div>
    //   <div className={styles.frameChild} />
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-4">
    //         <div className={styles.monthly}>Monthly</div>
    //         <img
    //           className={styles.streamingTvApp1Icon}
    //           alt=""
    //           src="/streamingtvapp-1@2x.png"
    //         />
    //         <div className={styles.rs200month}>Rs.200/month</div>
    //         <div className={styles.pResolution}>1080P Resolution</div>
    //         <div className={styles.rectangleGroup}>
    //           <div className={styles.rectangleDiv} />
    //           <div className={styles.subscribe} onClick={() => router.push('/signup/payment')}>SUBSCRIBE</div>
    //         </div>
    //       </div>


    //       <div className={styles.frameItem} />
    //       <div className="col-lg-4">
    //         <div className={styles.frameInner} />
    //         <div className={styles.ellipseDiv} />
    //         <div className={styles.halfYearly}>Half Yearly</div>
    //         <img
    //           className={styles.watchingAMovie1Icon}
    //           alt=""
    //           src="/watchingamovie-1@2x.png"
    //         />
    //         <div className={styles.rs9606months}>
    //           <p className={styles.p}>1200</p>
    //           <p className={styles.rs9606months1}>Rs.960/6months</p>
    //         </div>
    //         <div className={styles.pResolutionParent}>
    //           <div className={styles.pResolution1}>1080P Resolution</div>
    //           <div className={styles.buffering}>0 Buffering</div>
    //           <div className={styles.liveStreaming}>Live Streaming</div>
    //           <div className={styles.groupChild} />
    //           <div className={styles.groupItem} />
    //           <div className={styles.groupInner} />
    //         </div>
    //         <div className={styles.rectangleContainer}>
    //           <div className={styles.rectangleDiv} />
    //           <div className={styles.subscribe} onClick={() => router.push('/signup/payment')}>SUBSCRIBE</div>
    //         </div>
    //       </div>
    //       <div className="col-lg-4">
    //         <div className={styles.yearly}>Yearly</div>
    //         <img className={styles.watching1Icon} alt="" src="/watching-1@2x.png" />
    //         <div className={styles.rs14401year}>
    //           <p className={styles.p}>2400</p>
    //           <p className={styles.rs9606months1}>Rs.1440/1Year</p>
    //         </div>
    //         <div className={styles.pResolutionGroup}>
    //           <div className={styles.pResolution1}>1080P Resolution</div>
    //           <div className={styles.buffering}>0 Buffering</div>
    //           <div className={styles.liveStreaming}>Live Streaming</div>
    //           <div className={styles.groupChild} />
    //           <div className={styles.groupItem} />
    //           <div className={styles.groupInner} />
    //         </div>
    //         <div className={styles.groupDiv}>
    //           <div className={styles.rectangleDiv} />
    //           <div className={styles.subscribe} onClick={() => router.push('/signup/payment')}>SUBSCRIBE</div>
    //         </div>
    //       </div>




    // <div className={styles.chooseWrapper}>
    //   <div className={styles.choose}>CHOOSE</div>
    // </div> 



    //     </div>
    //   </div>
    // </div> */}
  );
};

export default Plans;
