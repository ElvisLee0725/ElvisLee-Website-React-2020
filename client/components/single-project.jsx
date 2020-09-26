import React from 'react';

function SingleProject({
  data: { url, sourceCode, img, imgAlt, title, description, skills },
}) {
  return (
    <div className='col-12 col-md-6 portfolio-box'>
      <img src={img} className='img-fluid' alt={imgAlt} />
      <div className='portfolio-box__overlay portfolio-box__overlay--bgDarkGrey'>
        <div className='portfolio-box__caption px-3'>
          <h4>{title}</h4>
          <h6 className='d-none d-sm-block'>{description}</h6>
          <small>{skills}</small>
          <div className='mt-3'>
            <a
              href={sourceCode}
              target='_blank'
              className='portfolio-link'
              data-toggle='tooltip'
              data-placement='bottom'
              title='Source Code'
            >
              <i className='fas fa-code fa-fw fa-2x mx-3'></i>
            </a>
            <a
              href={url}
              target='_blank'
              className='portfolio-link'
              data-toggle='tooltip'
              data-placement='bottom'
              title='Live Demo'
            >
              <i className='fas fa-desktop fa-fw fa-2x mx-3'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProject;
