import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className='text-primary fw-bold mb-4'>About the Project</h1>
              <p className='lead mb-4'>
                <strong className='display-8 text-primary'>This is a Front-End Shop Built by Alex Smirnov</strong>
                <br/> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe reprehenderit laborum praesentium maxime, numquam veritatis! Fugiat repellat exercitationem veritatis. Eos, possimus soluta reprehenderit, molestias odit sit at eveniet, praesentium porro sed dolorem nobis repellat nostrum! Commodi at, itaque qui consectetur quisquam autem cum. Cupiditate praesentium, id deserunt rerum labore rem quod architecto asperiores fuga eius libero ullam neque? Distinctio nam quo odit explicabo cumque fugit velit molestiae recusandae eius non quos aut, eum ipsa cum quia veniam! Ad tempore quod in dignissimos a provident alias similique temporibus illum dolore, illo facilis doloremque fuga ipsum, delectus ea ipsa nihil veritatis omnis.
              </p>
              <NavLink to='/contact' className='btn btn-outline-primary ms-2 px-3'>Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src="\assets\AboutUs.jpg" alt="about us" height="500px" width="500px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About