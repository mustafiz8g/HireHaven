import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";


const HotJobCard = ({job}) => {
  const {_id, title, company, company_logo, requirements, description, location, salaryRange} = job;


  return (
    <div className="card card-compact bg-base-100 shadow-xl">
    <div className="flex gap-2 m-2">
    <figure>
        <img 
          className="w-16"
          src={company_logo}
          alt="Shoes" />
      </figure>
      <div>
        <h4 className="text-2xl">{company}</h4>
        <p className="flex items-center gap-1"><MdLocationPin />
        {location}</p>
      
      </div>
    </div>
      <div className="card-body">
        <h2 className="card-title">{title}
        <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
            {
                requirements.map((skill, index) => <p key={index} className="px-2 border rounded-md text-center">{skill}</p>)
            }
        </div>
        <div className="card-actions justify-end items-center">
            <p>salary: {salaryRange.min} - {salaryRange.max}</p>
          <Link to={`/jobs/${_id}`}>
          <button className="btn btn-primary">Apply</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;