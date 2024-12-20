import { useEffect, useState } from "react";
import HotJobCard from "./HotJobCard";



const HotJobs = () => {
    const [jobs , setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3300/jobs')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setJobs(data)
        })
    },[])

    return (
        <div>
            <h2 className="text-3xl font-bold">Total :{jobs.length} </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {
            jobs.map(job => <HotJobCard key={job._id} job = {job}></HotJobCard>)
           }
            </div>
        </div>
    );
};

export default HotJobs;