import React from 'react';

function Carousel() {
  return (
    <section id='cover'>
      <div className='container-fluid'>
        <div className='row'>
          <div
            id='elvisCarousel'
            className='carousel slide'
            data-ride='carousel'
            data-interval='3000'
          >
            <ol className='carousel-indicators'>
              <li
                data-target='#elvisCarousel'
                data-slide-to='0'
                className='active'
              ></li>
              <li data-target='#elvisCarousel' data-slide-to='1'></li>
            </ol>

            <div className='carousel-inner' role='listbox'>
              <div className='carousel-item active'>
                <picture>
                  <source
                    srcSet='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/cover-large.jpg'
                    media='(min-width: 1380px)'
                  />
                  <source
                    srcSet='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/cover-medium.jpg'
                    media='(min-width: 990px)'
                  />
                  <source
                    srcSet='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/cover-small.jpg'
                    media='(min-width: 640px)'
                  />
                  <img
                    src='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/cover-xs.jpg'
                    className='d-block w-100'
                    alt='Elvis Lee Site Cover'
                  />
                </picture>
              </div>

              { /*
              <div className='carousel-item'>
                <picture>
                  <source
                    srcSet='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/rocker_cover-large.jpg'
                    media='(min-width: 1380px)'
                  />
                  <source
                    srcSet='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/rocker_cover-medium.jpg'
                    media='(min-width: 990px)'
                  />
                  <source
                    srcSet='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/rocker_cover-small.jpg'
                    media='(min-width: 640px)'
                  />
                  <img
                    src='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/rocker_cover-xs.jpg'
                    className='d-block w-100'
                    alt='Elvis Lee Rocker Cover'
                  />
                </picture>
                <div>
                  <div className='carousel-caption'>
                    <h3 className='large-hero__title'>
                      A Belief to Shine One Day 
                      </h3>
                      <h4 className='large-hero__subtitle'>
                      Efforts weigh more than talents
                      </h4>
                      </div>
                      </div>
                      </div>
                */ } 
                <div className='carousel-item'>
                  <picture>
                    <source
                    srcSet='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/coding_cover-large.jpg'
                    media='(min-width: 1380px)'
                    />
                    <source
                    srcSet='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/coding_cover-medium.jpg'
                    media='(min-width: 990px)'
                    />
                    <source
                    srcSet='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/coding_cover-small.jpg'
                    media='(min-width: 640px)'
                    />
                    <img
                    src='https://ubuntu-ec2-s3.s3-us-west-1.amazonaws.com/elvislee/images/coding_cover-xs.jpg'
                    className='d-block w-100'
                    alt='Elvis Lee Coding Cover'
                    />
                  </picture>
                  <div>
                    <div className='carousel-caption'>
                    <h3 className='large-hero__title'>
                    I'm Elvis Lee the <span id='typewriter' data-words='["Full Stack Developer", "Software Engineer", "Programmer"]' data-wait='1500'></span>
                    </h3>
                    <h4 className='large-hero__subtitle'>
                    Work with passion and perseverance
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <a
              className='carousel-control-prev'
              href='#elvisCarousel'
              role='button'
              data-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Previous</span>
            </a>
            <a
              className='carousel-control-next'
              href='#elvisCarousel'
              role='button'
              data-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='sr-only'>Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
