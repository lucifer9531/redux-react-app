import React, { Component } from 'react';
import './index.css';

class FieldItem extends Component {
    render() {
        const { item, curField, changeCourseField } = this.props;

        return (
            <span
                className={ ['field-item', item.field === curField ? 'current-field' : ''].join(' ') }
                onClick={ () => changeCourseField(item.field) }
            >
                { item.fieldName }
            </span>
        );
    }
}

export default FieldItem;