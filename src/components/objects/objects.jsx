import React, { PureComponent, PropTypes } from 'react';
import { includes } from 'lodash';

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
        if (this.props.markerObjects && this.props.markerObjects.length > 0) {
            let objects = this.props.markerObjects;

            if (this.props.objectDeleteIndexes.length > 0)
                objects = objects.filter(object =>
                    !includes(this.props.objectDeleteIndexes, object.index));

            return objects.map((object, key) => {
                return (
                    <ObjectsItem
                        index={object.index}
                        key={key}
                        markerIndex={this.props.markerIndex}
                        name={object.name}
                        number={key + 1}
                        setObjectDeleteIndex={this.props.setObjectDeleteIndex}
                    />
                );
            });
        }

        return null;
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

    getCurrentObjectIndex() {
        return this.props.markerObjects.length;
    }

    onKeyDownHandler(e) {
        if (e.keyCode === 27 || e.keyCode === 13)
            this.toggleCreateObject();

        if (e.keyCode === 13) {
            this.props.setObject(
                this.props.markerIndex,
                this.getCurrentObjectIndex(),
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
        objectDeleteIndexes: PropTypes.arrayOf(PropTypes.number),
        setObject: PropTypes.func,
        setObjectDeleteIndex: PropTypes.func,
    }
}
