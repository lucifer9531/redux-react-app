import React, { Component } from 'react';

import { getCourseList } from "../../models";
import CourseItem from './CourseItem';

class Index extends Component {

    state = {
        courseData: []
    }

    async getCourseData() {
        const courseData = await getCourseList();
        this.setState({
            courseData,
        })
    }

    filterData(data, field) {
        if (field === '-1') {
            return data;
        }
        return data.filter(item => item.field === field);
    }

    componentDidMount() {
        this.getCourseData()
    }

    render() {

        const { courseData } = this.state,
            { curField } = this.props;

        return (
            <div className="course-wrapper">
                <ul className="course-list">
                    {
                        this.filterData(courseData, curField).map((item, index) => {
                            return (
                                <CourseItem
                                    key={ index }
                                    item={ item }
                                />
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Index;