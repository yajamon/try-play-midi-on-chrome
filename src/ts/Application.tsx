import * as React from 'react';
import { render } from 'react-dom';

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
    private componentList:JSX.Element[] = [];
    private audioCtx = new AudioContext();
    constructor() {
        super();
        this.state = {
            currentComponent: ChildComponent.Index
        };
        this.componentList[ChildComponent.Index] = (<Index audioCtx={this.audioCtx} />);
        this.componentList[ChildComponent.Hello] = (<Hello />);
    }
    currentComponent(index:ChildComponent){
        this.setState({
            currentComponent: index
        });
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
                    <li><button onClick={e => {this.currentComponent(ChildComponent.Index)}} >go index</button></li>
                    <li><button onClick={e => {this.currentComponent(ChildComponent.Hello)}} >go hello</button></li>
                </ul>
                <div style={styles.inside}>
                    {this.componentList[this.state.currentComponent]}
                </div>
            </div>
        );
    }
}
