import * as React from 'react';
import AddinHeader from './AddinHeader';

import CreateContentControlButton from '../functions/CreateContentControls';
import ListContentControlButton from '../functions/ListContentControls';

export interface MainProps {
    title: string;
    subtitle: string;
    logo: string;
}

export interface MainState {
    date: Date;
}

class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        this.state = { date: new Date() };
    }
    
    render() {
        const {
            title,
            subtitle,
            logo
        } = this.props;

        return (
            <div>
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col">
                            <AddinHeader title={title} subtitle={subtitle} logo={logo} />
                        </div>
                        <div className="ms-Grid-col">
                        </div>
                    </div>

                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col">
                            <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
                        </div>
                    </div>

                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col">
                            <CreateContentControlButton/>
                        </div>
                    </div>

                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col">
                            <ListContentControlButton/>
                        </div>
                    </div>

                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col">
                            <p id="demo"></p>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Main;