const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-applications');

    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplication = idInt =>{
    const storedJobApplications = getStoredJobApplication();

    const exists = storedJobApplications.find(jobId => jobId === idInt);

    if(!exists){
        storedJobApplications.push(idInt);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications));
    }
}

export {saveJobApplication, getStoredJobApplication}