import * as React from 'react';

interface IndexProps {
    audioCtx: AudioContext;
}

interface State {
    node?: AudioNode;
}

/**
 * Index
 */
export class Index extends React.Component<IndexProps, State> {
    constructor(){
        super();
        this.state = {
            node: null
        };
    }

    componentWillMount(){
        const osr = this.props.audioCtx.createOscillator();
        osr.start(this.props.audioCtx.currentTime + 3);
        osr.connect(this.props.audioCtx.destination);
        this.setState({
            node: osr
        });
    }

    componentWillUnmount(){
        this.state.node.disconnect();
        if (this.state.node instanceof OscillatorNode){
            this.state.node.stop();
        }
        this.setState({
            node: null
        });
    }

    render() {
        return <h1>Index !</h1>;
    }
}
