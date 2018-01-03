import React, { Component } from 'react';
import Posts from '../components/Posts/Posts';
import withLayout from '../components/hoc/layout';
// import withReduxLayout from '../components/hoc/withReduxLayout';
import withRedux from 'next-redux-wrapper';
import initStore from '../store/initStore';

class indexPage extends Component {
		
		render() {
			return (
				<section>
					<Posts {...this.props} />
				</section>
			);
		}
	};

const mapStateToProps = ( state ) => {
  return {
      post: state.post,
  };
};

export default withRedux(initStore, mapStateToProps)(withLayout(indexPage));