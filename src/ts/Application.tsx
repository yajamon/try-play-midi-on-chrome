import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

import { Index } from './components/Index';
import { Hello } from './components/Hello';

enum ChildComponent {
    Index,
    Hello
}

interface ApplicationState {
    currentComponent: ChildComponent;
}

/**
 * Hello
 */
export class Application extends React.Component<{}, ApplicationState> {
    constructor() {
        super();
        this.state = {
            currentComponent: ChildComponent.Index
        };
    }
    render() {
        const styles = {
            inside: {
                cssFloat: "left",
                margin: "10px"
            }
        };
        return (
            <div>
                <ul style={styles.inside}>
                    <li><Link to="/">go root</Link></li>
                    <li><Link to="/hello">go hello</Link></li>
                </ul>
                <div style={styles.inside}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
