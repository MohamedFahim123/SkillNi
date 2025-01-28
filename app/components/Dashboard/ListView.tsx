import Image from "next/image";
import { PRODUCT } from "./product";

export default function ListView({ job }: { job: PRODUCT }) {
  return (
    <>
      <div className="card-style-2 hover-up mb-3 p-3 border border-1 rounded-3">
        <div className="card-head d-flex gap-3 mb-3">
          <div className="card-image">
            <Image
              width={50}
              height={50}
              src={`/assets/imgs/brands/${job.img}`}
              alt="jobBox"
            />
          </div>
          <div className="card-title">
            <h6>{job.title}</h6>
            <span className="job-type text-black-50">{job.type}</span>
            <span className="time-post text-black-50">{job.date} mins ago</span>
            <span className="location text-black-50">New York, US</span>
          </div>
        </div>
        <div className="card-2-bottom  d-flex justify-content-between ">
          <div className="card-tags">
            {job.tags.map((item, i) => (
              <a className="btn btn-tag" key={i}>
                {item}
              </a>
            ))}
          </div>
          <div className="card-price">
            <strong className="fs-4" style={{ color: "#3C65F5" }}>
              ${job.salary}
            </strong>
            <span className="hour">/Hour</span>
          </div>
        </div>
      </div>
    </>
  );
}
