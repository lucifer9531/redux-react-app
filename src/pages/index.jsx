import React, { Component } from 'react';

import { connect } from 'react-redux';

import CourseField from '../components/CourseField';
import CourseList from '../components/CourseList';
import { changeCourseField } from '../store/actions/courseTabList';

class Index extends Component {

    render() {
        const { curField, changeCourseField } = this.props;
        return (
            <div className="page-wrapper">
                <CourseField
                    curField={ curField }
                    changeCourseField={ changeCourseField }
                />
                <CourseList
                    curField={ curField }
                />
            </div>
        );
    }
}
// connect 连接
export default connect(
    function mapStateToProps(state) {
        return {
            curField: state.courseTabList.curField
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            changeCourseField: (field) => dispatch(changeCourseField(field))
        }
    }
)(Index);