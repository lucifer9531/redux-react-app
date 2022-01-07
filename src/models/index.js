import { axiosGet } from '../utils/http';

function getCourseFields() {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/api/course_field',
            success(data) {
                resolve(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}

function getCourseList() {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/api/course_list',
            success(data) {
                resolve(data);
            },
            error(err) {
                reject(err);
            }
        })
    })
}

export  {
    getCourseList,
    getCourseFields
}