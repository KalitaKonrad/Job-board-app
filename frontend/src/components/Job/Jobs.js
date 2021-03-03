import React, { Component } from "react";
import Job from "./Job";
import { connect } from "react-redux";
import { fetchJobs } from "../../actions/fetchJobs";
import ReactPaginate from "react-paginate";
import "../../assets/pagination.css";

class Jobs extends Component {
  componentDidMount() {
    const { page, fetchJobs, keywords, location } = this.props;
    fetchJobs(page, keywords, location);
  }

  renderJobs = (jobs) => {
    return (
      <div className="flex flex-col mx-auto container">
        {jobs.jobs.map((job) => (
          <Job
            key={job.id}
            position={job.position}
            minimumSalary={job.minimumSalary}
            maximumSalary={job.maximumSalary}
            description={job.description}
            jobLocation={job.jobLocation}
            skills={job.skills}
          />
        ))}
      </div>
    );
  };

  handlePageClick = (data) => {
    const { keywords, location, fetchJobs } = this.props;
    let selectedPage = data.selected; // index at Java Spring pagination starts at 0
    fetchJobs(selectedPage, keywords, location);
  };

  render() {
    const { jobs } = this.props;

    return (
      <div className="container flex flex-col items-center mx-auto">
        {this.renderJobs(jobs)}
        <ReactPaginate
          breakLabel={"..."}
          pageCount={10}
          nextLabel={""}
          previousLabel={""}
          // nextClassName={'arrow-right'}
          // previousClassName={'arrow-left'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          pageLinkClassName={
            "page-change-button hover:cursor focus:outline-none"
          }
          pageClassName={"page-change-button hover:cursor"}
          onPageChange={this.handlePageClick}
          containerClassName={
            "flex min-w-full items-center bg-blue-400 max-w-2xl " +
            "text-xl justify-around py-6 my-6 rounded-lg"
          }
          activeLinkClassName={"text-blue-600"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.jobs,
    page: state.jobs.page,
    keywords: state.jobs.keywords,
    location: state.jobs.location,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: (page, keywords, location) =>
      dispatch(fetchJobs(page, keywords, location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
