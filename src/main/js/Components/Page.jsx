import React from  "react";



const Page = ({children}) => (
    <div className="container">
            <div className="row">
                <div className="column-50">
                    {children}
                </div>
            </div>
    </div>
);

export default Page;


