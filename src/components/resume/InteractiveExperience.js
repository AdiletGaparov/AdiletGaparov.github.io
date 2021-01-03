import React from 'react';
import Container from "@material-ui/core/Container";
import {VictoryBar, VictoryChart, VictoryAxis, Bar, VictoryLabel } from "victory";
import {dataHistory} from "./dataHistory";

const InteractiveExperience = (props) => {
    return (
        <Container>
            <VictoryChart
                minDomain={{x:0}}
                height={200}
            >
                <VictoryBar
                    horizontal={true}
                    data={dataHistory}
                    x={"shortOrg"} y0={"startDate"}
                    y={"endDate"}
                />
            </VictoryChart>
        </Container>
    )
}

export default InteractiveExperience;