import document from '../assets/images/document.svg';
import notification from '../assets/images/notification.svg';
import project from '../assets/images/project.svg';

const img = [document, notification, project];
function Card (){
    return (
        <div className='flex flex-col items-center md:flex-row md:items-around gap-20 mt-24'>
        {img.map((img, index) =>{
            return (
            <div key={index} className="card w-96 bg-base-100 flex items-center shadow-xl">
        <figure className="px-10 w-52">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Tenders</h2>
          <p>Search International Tenders worldwide in Global Tenders section.</p>
          <div className="card-actions">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      
            )
        })}

        </div>
    )
}

export default Card;