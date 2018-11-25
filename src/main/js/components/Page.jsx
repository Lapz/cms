import React from  "react";



const Page = ({props}) => (
    <div className="container">
            <div className="row">
                <div className="column-50">
                    {props.children}
                </div>
            </div>
    </div>
);

export default Page;


