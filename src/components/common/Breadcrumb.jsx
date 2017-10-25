import React from 'react';

import { Breadcrumb, IBreadcrumbItem } from 'office-ui-fabric-react/lib/Breadcrumb';
import { withRouter } from 'react-router-dom';

class BreadCrumb extends React.Component {
    render() {
        let path = window.location.pathname.split('/');
        path.shift();

        let items = path.map((p, i) => {
            let link = '/';
            for (let j = 0; j <= i; j++) 
                link += path[j] + '/';

            return {
                text: p,
                key: i,
                onClick: () => {
                    this.props.history.push(link);
                },
                isCurrentItem: i + 1 === path.length
            }
        });
        
        let msCrumb = <Breadcrumb items={items} />;
        let filler = <span style={{width: '100%', height: '48px', display: 'block'}} />

        return (
            <div>
                {path.length > 2 ? msCrumb : filler}
            </div>
        );
    }
}

export default withRouter(BreadCrumb);