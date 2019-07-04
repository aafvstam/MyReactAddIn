import * as React from 'react';
import { Stack } from 'office-ui-fabric-react/lib/components/Stack';
import { mergeStyleSets, DefaultPalette } from 'office-ui-fabric-react/lib/Styling';

export interface AddinHeaderProps {
    title: string;
    subtitle: string;
    logo: string;
}

export interface AddinHeaderState {
    date: Date;
}

class AddinHeader extends React.Component<AddinHeaderProps, AddinHeaderState> {
    constructor(props: AddinHeaderProps) {
        super(props);
        this.state = { date: new Date() };
    }

    const styles = mergeStyleSets({
        root: {
          background: DefaultPalette.themeTertiary
        },
        item: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: DefaultPalette.white,
            background: DefaultPalette.themePrimary,
            overflow: 'hidden'
        }
    })

    render() {
        const {
            title,
            subtitle,
            logo
        } = this.props;

        return (
            //     <div class="ms-Grid-col ms-u-sm6 ms-u-md4 ms-u-lg2">A</div>
            //     <div class="ms-Grid-col ms-u-sm6 ms-u-md8 ms-u-lg10">B</div>
            // <div className="ms-Grid" dir="ltr" >
            //     <div className="ms-Grid-Row">
            //         <div className="ms-Grid-col ms-u-sm12 ms-depth-64">
            //             <img src={logo} />
            //         </div>
            //     </div>
            //     <div className="ms-Grid-Row">
            //         <div className="ms-Grid-col ms-u-sm12 ms-depth-64 ms-bgColor-themePrimary">
            //             <h1>{title}</h1>
            //         </div>
            //     </div>
            //     <div className="ms-Grid-Row">
            //         <div className="ms-Grid-col ms-u-sm12 ms-depth-64">
            //             <h2>{subtitle}</h2>
            //         </div>
            //     </div>
            // </div>

            <Stack className={this.styles.root}>
                <Stack.Item className={this.styles.item}><img src={logo} /></Stack.Item>
                <Stack.Item className={this.styles.item}><h1>{title}</h1></Stack.Item>
                <Stack.Item className={this.styles.item}><h2>{subtitle}</h2></Stack.Item>
            </Stack>
        );
    }
}

export default AddinHeader;