import React from 'react'
import { Button, Menu, Container } from 'semantic-ui-react'
export default function Navi() {
    return (
        <div>
          <Menu inverted fixed>
              <Container>
                <Menu.Item
                    name='home'
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
              </Container>
            </Menu>
        </div>
    )
}
