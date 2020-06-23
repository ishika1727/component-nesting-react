import React from 'react';
import ReactDOM from 'react-dom';
import Commentdetail from './Commentdetail';
import faker from 'faker';
import ApprovalCard from './Approvalcard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>WARNING!</h4>
                Are you sure you want to continue?
            </ApprovalCard>
            <ApprovalCard>
                <Commentdetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    text="Nice Blog Post!"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <Commentdetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    text="Keep it up"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <Commentdetail
                    author="Jane"
                    timeAgo="Yesterday at 1:45AM"
                    text="Great work"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"))