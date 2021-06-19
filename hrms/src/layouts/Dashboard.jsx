import React from 'react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import EmployerList from '../pages/EmployerList'
import Option from './Option'
import { Grid, GridColumn } from 'semantic-ui-react'
import CandidateList from '../pages/CandidateList'
import JobTitleList from '../pages/JobTitleList'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Option></Option>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        JOB ADVERTISEMENTS LIST
                        <JobAdvertisementList></JobAdvertisementList>
                        EMPLOYERS LIST
                        <EmployerList></EmployerList>
                        CANDIDATES LIST
                        <CandidateList></CandidateList>
                        JOB TITLES LIST
                        <JobTitleList></JobTitleList>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
