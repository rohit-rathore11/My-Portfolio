import React from "react";

const Project=()=>{

    return(
        <>

        <div className="main-had " id="project-section">

            <div className="inner-had">
                <div className="listofitems">
                   <table border={1}>

                    <tr>
                        <th>S.no</th>
                        <th>Project-Name</th>
                        <th>Technology Used</th>
                        

                    </tr>
                    <tr>
                        <td>01</td>
                        <td>library management system</td>
                        <td>html ,css,reactjs,material-ui-style component,basic- back-end</td>

                    </tr>

                    <tr>
                        <td>02</td>
                        <td>portfolio website</td>
                        <td>html ,css,reactjs,material-ui-style component</td>

                    </tr>
                    <tr>
                        <td>03</td>
                        <td>TO DO List</td>
                        <td>html ,css,reactjs,material-ui-style component</td>

                    </tr>
                    <tr>
                        <td>04</td>
                        <td>Weather App</td>
                        <td>html ,css,reactjs</td>

                    </tr>
                    <tr>
                        <td>05</td>
                        <td>Speech Recognition App </td>
                        <td>html ,css,reactjs,material-ui</td>

                    </tr>
                    <tr>Source Code is avialable on  github <a href="https://github.com/rohit-rathore11">github  </a> </tr>
                   </table>

                </div>

            </div>
        </div>
        </>
    );
}
export default Project;