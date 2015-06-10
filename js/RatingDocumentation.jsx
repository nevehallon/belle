"use strict";

import React, {Component} from 'react';
import {Card, Rating} from 'belle';
import Code from './Code';

export default class RatingDocumentation extends Component {

  render() {
    return <div>

      <h2 style={ {marginTop: 0, marginBottom: 40} }>Rating</h2>

      <Rating defaultValue={3}></Rating>

      <Code value={ basicCodeExample } style={ {marginTop: 40} } />

      <h3>Properties</h3>

      <table>
        <tr>
          <td style={ propertyNameStyle }>
            valueLink
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>Value Reference</i>
              <br />
              optional
            </p>
            <p>
              Behaves like the valueLink poperty of a native input-tag.
              ValueLink allows to enable two-way data binding between a state property and the value in
              the user interface.
            </p>
          </td>
        </tr>
        <tr>
          <td style={ propertyNameStyle }>
            defaultValue
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>Integer (1-5)</i>
              <br />
              optional
            </p>
            <p>
              Behaves like the defaultValue poperty of a native input-tag.
              The rating can be manipulated through the user interface.
            </p>
          </td>
        </tr>
        <tr>
          <td style={ propertyNameStyle }>
            value
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>Integer (1-5)</i>
              <br />
              optional
            </p>
            <p>
              Behaves like the value poperty of a native input-tag.
              The rating can <b>not</b> be manipulated through the user interface.
            </p>
          </td>
        </tr>
        <tr>
          <td style={ propertyNameStyle }>
            onChange
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>Function</i>
              <br />
              optional
            </p>
            <p>
              Callback executed as user changes rating interactively.
            </p>
          </td>
        </tr>
        <tr>
          <td style={ propertyNameStyle }>
            disabled
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>Boolean</i>
              <br />
              optional (default: false)
            </p>
            <p>
              Can be used to disable rating component.
            </p>
          </td>
        </tr>
        <tr>
          <td style={ propertyNameStyle }>
            preventFocusStyleForTouchAndClick
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>Boolean</i>
              <br />
              optional (default: true)
            </p>
            <p>
              Prevents the focus style being applied in case the buttons becomes focused by a click or touch..
            </p>
          </td>
        </tr>
        <tr>
          <td style={ propertyNameStyle }>
            character
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>Character</i>
              <br />
              optional (default: '★')
            </p>
            <p>
              Rating character used in the component.
            </p>
          </td>
        </tr>
        <tr>
          <td style={ propertyNameStyle }>
            characterProperties
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              <i>Object</i>
              <br />
              optional
            </p>
            <p>
              The property can be used to specify styling and other properties specific to rating character used.
            </p>
          </td>
        </tr>
      </table>

      <p>
      Other supported properties include:
      <span style={ {color: 'grey'} }> tabIndex, style, className, focusStyle, onMouseDown,
        onMouseUp, onMouseEnter, onMouseMove, onMouseLeave, onTouchStart, onTouchMove, onTouchEnd, onTouchCancel, onFocus, onBlur, onClick,
        onKeyDown</span>
      </p>
      <p>
        In addition for the rating character following properties can be used (inside characterProperties object):
        <span style={ {color: 'grey'} }> characterStyle, disabledCharacterStyle, disabledHoverCharacterStyle, activeCharacterStyle,
        hoverCharacterStyle</span>
      </p>

      <h3>Methods</h3>

      <table>
        <tr>
          <td style={ propertyNameStyle }>
            resetValue
          </td>
          <td style={ propertyDescriptionStyle }>
            <p style={ {marginTop: 0} }>
              Method can be called to reset rating to undefined.
            </p>
          </td>
        </tr>
      </table>

      <h3>More Examples</h3>

      <Card style={{ borderTop: '1px solid #f2f2f2', 'padding': '15px' }}>
        <Rating defaultValue={4} disabled></Rating>
        <Code value= { advanceCodeExample1 } style={ {marginTop: 15} } />
      </Card>
      <Card style={{ borderTop: '1px solid #f2f2f2', 'padding': '15px' }}>
        <Rating defaultValue={4} character={'✪'}></Rating>
        <Code value= { advanceCodeExample2 } style={ {marginTop: 15} } />
      </Card>
      <Card style={{ borderTop: '1px solid #f2f2f2', 'padding': '15px' }}>
        <Rating ref="rating" defaultValue={4}></Rating>
        <a onClick={ function(){this.refs.rating.resetValue()}.bind(this) }
           style={ {marginLeft: '20px', position: 'relative', top: '-5px', textDecoration: 'underline', 'cursor': 'pointer'} }>Reset</a>
        <Code value= { advanceCodeExample3 } style={ {marginTop: 15} } />
      </Card>
    </div>;
  }
}

const basicCodeExample = `<Rating defaultValue={3}></Rating>`;

const advanceCodeExample1 = `<Rating defaultValue={4} disabled></Rating>`;

const advanceCodeExample2 = `<Rating defaultValue={4} character={'✪'}></Rating>`;

const advanceCodeExample3 = `<Rating ref="rating" defaultValue={4}></Rating>\n<a onClick={ function(){this.refs.rating.resetValue()}.bind(this) }>Reset</a>`;

const propertyNameStyle = {
  padding: '0 20px 0 0',
  textAlign: 'left',
  verticalAlign: 'top',
  color: 'grey'
};

const propertyDescriptionStyle = {
  padding: 0,
  textAlign: 'left',
  verticalAlign: 'top'
};
