import { useLoaderData, useParams } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information
    } = job;

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully')
    }


    return (
        <div>
            
            <div className="grid md:grid-cols-4 gap-6 my-5 mx-8">
                <div className="border md:col-span-3 p-10 ">
                    <h2 className="font-bold mt-4">Job Description:</h2>
                    <p>{job_description}</p>
                    <h2 className="font-bold mt-4">Job Responsibility:</h2>
                    <p>{job_responsibility}</p>
                    <h2 className="font-bold mt-4">Educational Requirements:</h2>
                    <p>{educational_requirements}</p>
                    <h2 className="font-bold mt-4">Experiences:</h2>
                    <p>{experiences}</p>
                </div>

                <div className="border p-10">
                    <h2 className="font-bold mt-4">Job Details</h2>
                    <hr />
                    <h4>Job Title: {job_title}</h4>
                    <h4 className="flex mb-6"><RiMoneyDollarCircleLine></RiMoneyDollarCircleLine>Salary:{salary}<span>(per month)</span> </h4> 
                    <h2 className="font-bold">Contact Information</h2>
                    <hr />
                    <h4>Phone: {contact_information.phone}</h4>
                    <h4>Email: {contact_information.email}</h4>
                    <h4>Address: {contact_information.address}</h4>

                    

                    <button onClick={handleApplyJob} className="btn btn-primary w-full my-5 ">Apply Now</button>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;