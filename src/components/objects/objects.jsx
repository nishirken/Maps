import React, { PureComponent, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { ObjectsItem } from 'Components';
import StyledObjects from './styled-objects';
import StyledCreateObjectButton from './styled-create-object-button';
import StyledObjectNameField from './styled-object-name-field';

export default class Objects extends PureComponent {
    render() {
        return (
            <StyledObjects open={this.props.mouseEnter}>
                {this.renderCreateObject()}
                {this.renderObjectsItem()}
            </StyledObjects>
        );
    }

    renderCreateObject() {
        if (this.state.createObject)
            return (
                <StyledObjectNameField
                    innerRef={input => {
                        this.input = input;
                    }}
                    onChange={::this.onChangeHandler}
                    onKeyDown={::this.onKeyDownHandler}
                />
            );

        return (
            <StyledCreateObjectButton onClick={::this.toggleCreateObject}>
                create new object
            </StyledCreateObjectButton>
        );
    }

    renderObjectsItem() {
        let objects = this.props.markerObjects;

        objects = objects.filter(object =>
            !this.props.objectDeleteIndexes.includes(object.get('index')));

        return objects.map((object, key) => {
            const index = object.get('index');

            return (
                <ObjectsItem
                    index={index}
                    key={index}
                    markerIndex={this.props.markerIndex}
                    name={object.get('name')}
                    number={key + 1}
                    setObjectDeleteIndex={this.props.setObjectDeleteIndex}
                />
            );
        });
    }

    toggleCreateObject() {
        this.setState(prevState => {
            return {
                ...prevState,
                createObject: !prevState.createObject,
            };
        });
    }

    onChangeHandler(e) {
        this.objectName = e.target.value;
    }

    objectNameValidate(objectName) {
        return objectName === '' ? 'object' : objectName;
    }

    onKeyDownHandler(e) {
        if (e.keyCode === 27 || e.keyCode === 13)
            this.toggleCreateObject();

        if (e.keyCode === 13) {
            this.props.setObject(
                this.props.markerIndex,
                this.props.markerObjects.size + 1,
                this.objectNameValidate(this.objectName)
            );
            this.objectName = '';
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            createObject: false,
        };
        this.objectName = '';
    }

    componentDidUpdate() {
        if (this.state.createObject && this.input)
            this.input.focus();
    }

    static propTypes = {
        markerIndex: PropTypes.number,
        markerObjects: PropTypes.arrayOf(
            PropTypes.shape({
                index: PropTypes.number,
                name: PropTypes.string,
            }),
        ),
        mouseEnter: PropTypes.bool,
        objectDeleteIndexes: ImmutablePropTypes.listOf(PropTypes.number),
        setObject: PropTypes.func,
        setObjectDeleteIndex: PropTypes.func,
    }
}
