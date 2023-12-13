import React, { useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from "../redux/actions/jobAction";
import { Link, useParams } from "react-router-dom";
import CardElement from "../components/CardElement";
import LoadingBox from "../components/LoadingBox";
import { jobTypeLoadAction } from "../redux/actions/jobTypeAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SlcComponent from "../components/SlcComponent";
import SearchInputEl from "../components/SearchInput";
import Joblist from "../components/JobList";
import RecentJobs from "../components/RecentJobs";

const dummyColleges = [
  {
    id: 1,
    name: "IIT Banglore",
    location: "Bangalore",
    naacGrade: "A+",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quae vitae vel tempora voluptate ducimus facilis velit. Aperiam ullam, enim placeat commodi amet odio voluptate culpa natus, pariatur ab deserunt!",
  },
  {
    id: 2,
    name: "Mumbai University",
    location: "Mumbai",
    naacGrade: "A",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quae vitae vel tempora voluptate ducimus facilis velit. Aperiam ullam, enim placeat commodi amet odio voluptate culpa natus, pariatur ab deserunt!",
  },
  {
    id: 3,
    name: "City College",
    location: "Kolkata",
    naacGrade: "A+",
    description:
      "City College is a prestigious institution in Kolkata known for its excellence in both arts and science programs.",
  },
  {
    id: 4,
    name: "Tech Institute",
    location: "Chennai",
    naacGrade: "B",
    description:
      "Tech Institute offers a wide range of engineering and technology programs in the heart of Chennai.",
  },
  {
    id: 5,
    name: "Green Valley University",
    location: "Pune",
    naacGrade: "A",
    description:
      "Green Valley University is located in the lush green surroundings of Pune, offering quality education and research opportunities.",
  },
  {
    id: 6,
    name: "Heritage College",
    location: "Jaipur",
    naacGrade: "B+",
    description:
      "Heritage College is known for its rich cultural heritage and academic excellence in Jaipur.",
  },
  {
    id: 7,
    name: "Science Academy",
    location: "Delhi",
    naacGrade: "A+",
    description:
      "Science Academy in Delhi is renowned for its advanced scientific research and academic programs.",
  },
  {
    id: 8,
    name: "Royal College",
    location: "Hyderabad",
    naacGrade: "A",
    description:
      "Royal College is situated in the royal city of Hyderabad, offering a range of arts and science programs.",
  },
  {
    id: 9,
    name: "Tech Park Institute",
    location: "Bengaluru",
    naacGrade: "B",
    description:
      "Tech Park Institute in Bengaluru is known for its cutting-edge technology programs and industry partnerships.",
  },
  {
    id: 10,
    name: "Coastal University",
    location: "Goa",
    naacGrade: "A+",
    description:
      "Coastal University, located in the serene coastal region of Goa, offers a diverse range of academic programs and research opportunities.",
  },
  {
    id: 10,
    name: "Narendra Modi University",
    location: "Gujarat",
    naacGrade: "A+",
    description:
      "Narendra Modi University, located in the serene coastal region of Gujarat, offers a diverse range of academic programs and research opportunities.",
  },
  {
    id: 10,
    name: "IIT Delhi University",
    location: "Delhi",
    naacGrade: "A+",
    description:
      "IIT Delhi University, located in the serene coastal region of Delhi, offers a diverse range of academic programs and research opportunities.",
  }
];

const FindJob = () => {
  const [colleges, setColleges] = useState(dummyColleges);
  const [filteredColleges, setFilteredColleges] = useState(colleges);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => { }, []);

  useEffect(() => {
    const filteredColleges = colleges.filter((college) => {
      return selectedLocation === "" || college.location === selectedLocation;
    });

    setFilteredColleges(filteredColleges);
  }, [colleges, selectedLocation]);

  const handleLocationFilter = (location) => {
    setSelectedLocation(location);
  };

  // For Loading Jobs
  const { jobs, setUniqueLocation, pages, loading } = useSelector(
    (state) => state.loadJobs
  );

  // const { palette } = useTheme();
  const dispatch = useDispatch();
  const { keyword, location } = useParams(); // This grabs the values from params

  const [page, setPage] = useState(1);
  const [cat, setCat] = useState("");
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const [fullTime, setFullTime] = useState(false);
  const [freelance, setFreelance] = useState(false);
  const [partTime, setPartTime] = useState(false);
  const [internship, setInternship] = useState(false);

  // const [eL, setEL] = useState(false);
  // const [interm, setInterm] = useState(false);
  // const [exper, setExper] = useState(false);
  // const [isJTClicked, setIsJTClicked] = useState(false);

  // On the Load of page dispatch function will run and if any values changes then it would re-render
  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  const handleChangeCategory = (e) => {
    setCat(e.target.value);
  };

  //handle filter click for mobile devices
  const handleFilterClick = () => {
    setIsFilterClicked(!isFilterClicked);
  };

  // handles check box's div 1
  const handleClearJType = () => {
    setFullTime(false);
    setFreelance(false);
    setPartTime(false);
    setInternship(false);
  };

  return (
    <section>
      {/* For Desktops */}
      <div className="hidden md:flex w-screen items-center justify-center">
        <div className="p-16">
          <div className="flex items-center justify-center gap-6">
            {/* <div className='w-1/2 p-4 bg-lightCard shadow-xl rounded-full flex items-center justify-center'>
              <input type="text" placeholder='Job Title' className='w-1/2 h-full px-12 rounded-full outline-none' />
              <input type="text" placeholder='Location' className='h-full px-12 rounded-e-full border-l-2 outline-none' />
            </div>
            <button className='bg-lightPrimary text-lightCard p-4 px-12 rounded-full'>Search</button> */}
            <div className="flex flex-col items-center justify-center gap-6 ">
              <SearchInputEl />
            </div>
          </div>

          <div className="md:w-screen lg:w-full px-8">
            {/*
                            <ul className='mt-9 flex w-full justify-between items-center' >
                            { <li className=' px-8 py-3 rounded-full border'>Part Time</li> 
                            <li className=' px-8 py-3 rounded-full border hover:bg-lightPrimary hover:text-lightCard cursor-pointer'>Remote</li>
                            <li className=' px-8 py-3 rounded-full border hover:bg-lightPrimary hover:text-lightCard cursor-pointer'>Designer</li>
                            <li className=' px-8 py-3 rounded-full border hover:bg-lightPrimary hover:text-lightCard cursor-pointer'>Illustrator</li>
                            <li className=' px-8 py-3 rounded-full border hover:bg-lightPrimary hover:text-lightCard cursor-pointer'>Manager</li>
                            <li className=' px-8 py-3 rounded-full border hover:bg-lightPrimary hover:text-lightCard cursor-pointer'>Editor</li>
                            <li className=' px-8 py-3 rounded-full border hover:bg-lightPrimary hover:text-lightCard cursor-pointer'>Junior Level</li>
                            <li className=' px-8 py-3 rounded-full border hover:bg-lightPrimary hover:text-lightCard cursor-pointer'>Senior Level</li>
                            <li className=' px-8 py-3 rounded-full border hover:bg-lightPrimary hover:text-lightCard cursor-pointer'>Developer</li>
                        </ul>
                        */}

            <div className="grid grid-cols-5 gap-10 mt-8 ">
              {/* Left Side */}
              <div className="col-span-1 ">
                <div className="flex flex-col gap-2">
                  {/* <p>Filter</p> */}
                  {/* <input type="text" placeholder='Search Job' className='w-full p-3 border border-lighttextGray rounded-lg' /> */}
                  <SlcComponent
                    handleChangeCategory={handleChangeCategory}
                    cat={cat}
                  />


                  <div>
                    <div className="flex justify-between mt-6">
                      <p className="text-lightPrimary font-medium">Location</p>
                      {/* <button onClick={handleClearExp} className=" decoration-inherit">
                        Clear
                      </button> */}
                    </div>
                    <div className="flex flex-col mt-6">
                      {/* <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-400 mr-2"
                          checked={eL}
                          onChange={() => setEL(!eL)}
                        />
                        <span className="font-medium">Bangalore</span>
                      </label>

                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-400 mr-2"
                          checked={interm}
                          onChange={() => setInterm(!interm)}
                        />
                        <span className="font-medium">Delhi</span>
                      </label> */}
                      {/* <label>
                        <input type="checkbox" className=" bg-lighttextGray " checked={exper} onChange={() => setExper(!exper)} />
                        <span className="lg:ml-6 font-medium">Experienced</span>
                      </label> */}

                      {/* Rendering the list of locations using unordered list */}

                      {/* <ul>
                        {setUniqueLocation &&
                          setUniqueLocation.map((location, i) => (
                            <li key={i} className="flex items-center">
                              <LocationOnIcon className="text-lightPrimary text-lg" />
                              <Link
                                to={`/search/location/${location}`}
                                className="ml-2 hover:text-lightPrimary"
                              >
                                {location}
                              </Link>
                            </li>
                          ))}
                      </ul> */}

                      <ul>
                        <li
                          className="flex items-center gap-3"
                          onClick={() => handleLocationFilter("")}
                        >
                          <LocationOnIcon className="text-lightPrimary text-lg" />
                          <p className=" text-lg hover:text-lightPrimary font-medium cursor-pointer">
                            All
                          </p>
                        </li>
                        <li
                          className="flex items-center gap-3"
                          onClick={() => handleLocationFilter("Bangalore")}
                        >
                          <LocationOnIcon className="text-lightPrimary text-lg" />
                          <p className=" text-lg hover:text-lightPrimary font-medium cursor-pointer">
                            Banglore
                          </p>
                        </li>
                        <li
                          className="flex items-center gap-3"
                          onClick={() => handleLocationFilter("Mumbai")}
                        >
                          <LocationOnIcon className="text-lightPrimary text-lg" />
                          <p className=" text-lg hover:text-lightPrimary font-medium cursor-pointer">
                            Mumbai
                          </p>
                        </li>
                        <li
                          className="flex items-center gap-3"
                          onClick={() => handleLocationFilter("Delhi")}
                        >
                          <LocationOnIcon className="text-lightPrimary text-lg" />
                          <p className=" text-lg hover:text-lightPrimary font-medium cursor-pointer">
                            Delhi
                          </p>
                        </li>
                        <li
                          className="flex items-center gap-3"
                          onClick={() => handleLocationFilter("Gujarat")}
                        >
                          <LocationOnIcon className="text-lightPrimary text-lg" />
                          <p className=" text-lg hover:text-lightPrimary font-medium cursor-pointer">
                            Gujarat
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="col-span-4">
                {/* Map through jobData to render job items */}
                {/*                 
                {jobData.map((job) => (
                  <div key={job.id} className="flex lg:gap-10 md:gap-2 items-center justify-center rounded-2xl border px-16 py-6 ml-auto mb-4">
                    <img src={job.logoSrc} alt="tesla_logo" />
                    <div>
                      <p className="font-bold">{job.title}</p>
                      <p className="text-sm text-lighttextGray">{job.company}</p>
                    </div>
                    <div className="md:hidden lg:visible lg:flex px-8 py-3 rounded-full border bg-lightBgBlue font-light">{job.type}</div>
                    <div className="px-8 py-3 rounded-full border bg-lightBgBlue font-light">{job.level}</div>
                    <div className="flex items-center justify-center">
                      <p className="font-bold text-2xl ">{job.salary}</p>
                      <p className="text-lighttextGray">/month</p>
                    </div>
                  </div>
                ))} */}

                <RecentJobs />

                <ul>
                  {/* {filteredColleges.map((college) => (
                    <CardElement
                      id={college.id}
                      jobTitle={college.name}
                      description={college.description}
                    />
                  ))} */}
                </ul>

                {/* <div>
                  {loading ? (
                    <div className="w-full h-screen flex items-center justify-center pr-40 pb-16">
                      <LoadingBox />
                    </div>
                  ) : jobs && jobs.length === 0 ? (
                    <div className="min-h-350 flex justify-center items-center">
                      <h2>No result found!</h2>
                    </div>
                  ) : (
                    jobs &&
                    jobs.map((job, i) => (
                      <CardElement
                        key={i}
                        id={job._id}
                        jobTitle={job.title}
                        description={job.description}
                        category={
                          job.jobType ? job.jobType.jobTypeName : "No category"
                        }
                        location={job.location}
                        salary={job.salary}
                      />
                    ))
                  )}

                  <Stack spacing={2}>
                    <Pagination
                      page={page}
                      count={pages === 0 ? 1 : pages}
                      onChange={(event, value) => setPage(value)}
                    />
                  </Stack>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Mobile */}
      <div className="md:hidden flex flex-col w-screen pt-32 px-8">
        <div className="flex flex-col items-center justify-center gap-6 ">
          <SearchInputEl />
        </div>

        <div className="mt-10">
          {/* <p onClick={handleJTClick}>JobType</p>
        {
          isJTClicked && (
            <select name="job-type">
          <option value="select">Select</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
          )
        } */}

          <div className="flex items-center justify-center mb-10">
            <button
              className="border-2 border-lighttextGray md:px-7 px-9 py-3  text-sm rounded-lg"
              type="submit"
              onClick={handleFilterClick}
            >
              More Options
            </button>
          </div>

          <div className="flex items-center justify-center">
            <div className="absolute z-20">
              {isFilterClicked && (
                <div className="bg-white">
                  <div className="flex flex-col gap-2 p-8 rounded-lg shadow-md">
                    <div className="flex justify-end">
                      {/* <p>Filter</p> */}
                      <p onClick={handleFilterClick}>x</p>
                    </div>
                    {/* <input type="text" placeholder='Search Job' className='w-full p-3 border border-lighttextGray rounded-lg' /> */}
                    <SlcComponent
                      handleChangeCategory={handleChangeCategory}
                      cat={cat}
                    />
                    <div>
                      <div className="flex justify-between mt-8">
                        <p className="text-lightPrimary font-medium">
                          Job Type
                        </p>
                        <button
                          onClick={handleClearJType}
                          className=" decoration-inherit"
                        >
                          Clear
                        </button>
                      </div>
                      <div className="flex flex-col mt-6">
                        <label>
                          <input
                            type="checkbox"
                            className="rounded border-gray-400"
                            checked={fullTime}
                            onChange={() => setFullTime(!fullTime)}
                          />
                          <span className="ml-6 font-medium">Full Time</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="rounded border-gray-400"
                            checked={freelance}
                            onChange={() => setFreelance(!freelance)}
                          />
                          <span className="ml-6 font-medium">Freelance</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className=" bg-lighttextGray "
                            checked={partTime}
                            onChange={() => setPartTime(!partTime)}
                          />
                          <span className="ml-6 font-medium">Part Time</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className=" bg-lighttextGray "
                            checked={internship}
                            onChange={() => setInternship(!internship)}
                          />
                          <span className="ml-6 font-medium">Internship</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mt-6">
                        <p className="text-lightPrimary font-medium">
                          Location
                        </p>
                        {/* <button onClick={handleClearExp} className=" decoration-inherit">
                            Clear
                          </button> */}
                      </div>
                      <div className="flex flex-col mt-6">
                        {/* <label>
                            <input type="checkbox" className="rounded border-gray-400" checked={eL} onChange={() => setEL(!eL)} />
                            <span className="ml-6 font-medium">Entry Level</span>
                          </label>
                          <label>
                            <input type="checkbox" className="rounded border-gray-400" checked={interm} onChange={() => setInterm(!interm)} />
                            <span className="ml-6 font-medium">Intermediate</span>
                          </label>
                          <label>
                            <input type="checkbox" className=" bg-lighttextGray " checked={exper} onChange={() => setExper(!exper)} />
                            <span className="ml-6 font-medium">Experienced</span>
                          </label> */}
                        <ul>
                          {setUniqueLocation &&
                            setUniqueLocation.map((location, i) => (
                              <li
                                key={i}
                                className="flex items-center"
                                onClick={handleFilterClick}
                              >
                                <LocationOnIcon className="text-lightPrimary text-lg" />
                                <Link
                                  to={`/search/location/${location}`}
                                  className="ml-2 hover:text-lightPrimary"
                                >
                                  {location}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <div>
          {loading ? (
            <div className="w-screen h-screen flex items-center justify-center pr-16">
              <LoadingBox />
            </div>
          ) : jobs && jobs.length === 0 ? (
            <div className="min-h-350 flex justify-center items-center">
              <h2>No result found!</h2>
            </div>
          ) : (
            jobs &&
            jobs.map((job, i) => (
              <CardElement
                key={i}
                id={job._id}
                jobTitle={job.title}
                description={job.description}
                category={job.jobType ? job.jobType.jobTypeName : "No category"}
                location={job.location}
                salary={job.salary}
              />
            ))
          )}

        
        </div> */}
        <div>
          {filteredColleges.map((college) => (
            <CardElement
              id={college.id}
              jobTitle={college.name}
              description={college.description}
            />
          ))}
        </div>

        {/* Map through jobData to render job items */}
        {/* {jobData.map((job) => (
  <div key={job.id} className="flex gap-10 items-center justify-center rounded-2xl border px-16 py-5 mb-4">
    <img src={job.logoSrc} alt="tesla_logo" />
    <div>
      <p className="font-bold">{job.title}</p>
      // <p className="text-sm text-lighttextGray">{job.company}</p>
      <p className="text-sm text-lighttextGray">{job.type}</p>
    </div>
    // <div className="px-8 py-3 rounded-full border bg-lightBgBlue font-light">{job.type}</div>
    <div className="">
      <p className="font-bold text-xl ">{job.salary}</p>
      <p className="text-lighttextGray">/month</p>
    </div>
  </div>
))} */}
      </div>
    </section>
  );
};

export default FindJob;
