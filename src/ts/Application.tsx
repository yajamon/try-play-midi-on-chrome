import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';


/**
 * Hello
 */
export class Application extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">go root</Link></li>
                    <li><Link to="/hello">go hello</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
