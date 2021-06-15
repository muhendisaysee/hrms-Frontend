import React from 'react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import EmployerList from '../pages/EmployerList'
import Option from './Option'
import { Grid, GridColumn } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Option></Option>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <JobAdvertisementList></JobAdvertisementList>
                        <EmployerList></EmployerList>
                        <CandidateList></CandidateList>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
