import React, { Component } from 'react';
class DemoDate extends Component {
    daytime() {
        const date = new Date();
        const hr = date.getHours();
        if (hr < 12) {
            return "morning";
        }
        else if (hr >= 12 && hr < 17) {
            return "afternoon";
        }
        else {
            return "night";
        }
    }




    render() {
        const dat = new Date();
        const hrr = dat.getHours();

        let datetodisplay = "";
        datetodisplay = dat.toDateString();

        let timetodisplay = "";
        if (hrr < 12) {
            timetodisplay = "morning" +hrr;
        }
        else if (hrr >= 12 && hrr < 17) {
            timetodisplay = "afternoon" +hrr;
        }
        else {
            timetodisplay = "night" +hrr;
        }
        return (
            <div>

                <h2>

                    {/* System date :{Date()} Good {this.daytime()} <br /> */}
                    Custom date : {Date().getHours}   Good {timetodisplay}
                </h2>
            </div>

        );
    }
}

export default DemoDate;