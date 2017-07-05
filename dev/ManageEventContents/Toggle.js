/**
 * Created by sandeepj on 5/7/17.
 */
import React, {Component} from "react";
import ToggleButton from 'react-toggle-button'
import styles from 'react-toggle-button'
class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true
        }
    }

    render() {
        return (
            <div className="t_button_blue">
            <ToggleButton
                inactiveLabel={''}
                activeLabel={''}
                colors={{
                    activeThumb: {
                        base: 'rgb(250,250,250)',
                    },
                    inactiveThumb: {
                        base: 'rgb(62,130,247)',
                    },
                    active: {
                        base: 'rgb(207,221,245)',
                        hover: 'rgb(177, 191, 215)',
                    },
                    inactive: {
                        base: 'rgb(65,66,68)',
                        hover: 'rgb(95,96,98)',
                    }
                }}
                // trackStyle={styles.trackStyle}
                // thumbStyle={styles.thumbStyle}
                thumbAnimateRange={[-1, 36]}
                // thumbIcon={<ThumbIcon/>}
                value={this.state.value}
                onToggle={(value) => {
                    this.setState({
                        value: !value,
                    })
                }} />
            </div>

        )
    }
}
export default Toggle;
