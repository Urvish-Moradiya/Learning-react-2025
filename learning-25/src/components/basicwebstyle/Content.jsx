import React from 'react'
import '../assets/Content.css'
import image from '../assets/images/Kedarkanthatrek.jpg'
export const Content = () => {
   
    return (
      <div className='full-container'>
        <div className='front'>
          <h1>Welcome to our Website</h1>
          <p>Lorem ipsum dolor sit amet Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem itaque assumenda perferendis eius earum magnam et, soluta omnis exercitationem rerum dicta, iure doloribus odio cum, quia inventore placeat! Nostrum, laudantium.consectetur adipisicing elit. Corrupti doloribus exercitationem nesciunt, eum officia eligendi porro a at aspernatur sit odio ducimus earum, quod modi. Ullam nam molestiae veritatis obcaecati!</p>
        </div>
        <div class="about">
          <h1>About Us</h1>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, omnis accusamus ratione perferendis quisquam amet ipsum nesciunt animi at voluptate nemo mollitia officia deserunt? Rerum aspernatur repellendus officia neque delectus!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia sequi iste, eaque esse quam illum tempora? Qui voluptas ducimus dignissimos perferendis ab nisi ullam tenetur, corrupti velit soluta libero?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad cum officia magni corporis fugiat repudiandae blanditiis eum saepe. Libero repellat aliquam minima error ea, repudiandae quia iure beatae distinctio.
            </p>
            <img src={image} alt="About Us" />
          </div>
        </div>

      </div>
  )
}



