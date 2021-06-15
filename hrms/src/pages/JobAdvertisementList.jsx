import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([]);
    useEffect(()=>{
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisements(result.data.data))
    })
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>Open Position</Table.HeaderCell>
                        <Table.HeaderCell>Min Salary</Table.HeaderCell>
                        <Table.HeaderCell>Max Salary</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <Table.Row  key={jobAdvertisement.id}>
                                <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.description}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobTitle.title}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.openPosition}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.salaryMin}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.salaryMax}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.deadline}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.status}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
