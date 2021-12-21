import React from 'react'
import "./SectionStyles.css";
import { Card, CardContent } from "@material-ui/core";
import Report from './Report';

function SectionTwo() {
    return (
      <div className="section_two">
        <Card className="section_two_card">
          <h4>Report</h4>
          <CardContent>
            <Report/>
          </CardContent>
        </Card>
      </div>
    );
}

export default SectionTwo
