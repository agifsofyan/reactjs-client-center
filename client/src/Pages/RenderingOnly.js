// import React, { Component } from 'react'
// import { Button, Radio } from 'semantic-ui-react'

// export default class RadioExampleRemoteControl extends Component {
//   state = { checked: false }
//   toggle = () => this.setState((prevState) => ({ checked: !prevState.checked }))

//   render() {
//     return (
//       <div>
//         <Button onClick={this.toggle}>Toggle it</Button>
//         <Radio
//           label='Check this radio'
//           onChange={this.toggle}
//           checked={this.state.checked}
//         />
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import { Form, Radio, Button } from 'semantic-ui-react'

export default class RadioExampleRadioGroup extends Component {
    state = {};

    handleChange = (e, { value }) => {
        this.setState({ value });
    };

    toggle = () => {
        this.setState((prevState) => ({ checked: !prevState.checked }))
    };

    render() {
        return (
        <Form>
            <Form.Field>
                Selected value: <b>{this.state.value}</b>
            </Form.Field>
            <Form.Field>
            <Button onClick={this.toggle}>
                Toggle it
            </Button>
            <Radio
                label='Choose this'
                name='radioGroup'
                value='this'
                checked={this.state.value === 'this'}
                onChange={this.handleChange}
            />
            </Form.Field>
            <Form.Field>
            <Button onClick={this.toggle}>
                Toggle it
            </Button>
            <Radio
                label='Or that'
                name='radioGroup'
                value='that'
                checked={this.state.value === 'that'}
                onChange={this.handleChange}
            />
            </Form.Field>
        </Form>
        )
    }
}