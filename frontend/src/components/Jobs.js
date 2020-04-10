import React, { Component } from 'react';
import Job from './Job';
import { connect } from 'react-redux';
import { fetchJobs } from '../actions/fetchJobs';
import InfiniteScroll from 'react-infinite-scroll-component';
import NoMoreJobs from './NoMoreJobs';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Jobs extends Component {
  componentDidMount() {
    const { page, fetchJobs, keywords, location } = this.props;
    fetchJobs(page, keywords, location);
  }

  render() {
    const { jobs, page, fetchJobs, keywords, location, hasMoreItems } = this.props;

    return (
      <div className='flex flex-col w-3/4 mx-auto container'>
        <InfiniteScroll
          className='flex flex-col items-center'
          dataLength={jobs.jobs.length}
          next={() => fetchJobs(page, keywords, location)}
          hasMore={hasMoreItems}
          endMessage={<NoMoreJobs />}
          loader={
            <span className='p-2 m-2'>
              <FontAwesomeIcon icon={faCog} className='fa-spin' size='5x' />
            </span>
          }
        >
          {jobs.jobs.map((job) => (
            <Job
              key={job.id}
              position={job.position}
              description={job.description}
              location={job.location}
              skills={job.skills}
            />
          ))}
        </InfiniteScroll>
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
    hasMoreItems: state.jobs.hasMoreItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJobs: (page, keywords, location) => dispatch(fetchJobs(page, keywords, location)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
