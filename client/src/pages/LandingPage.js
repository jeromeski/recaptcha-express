
import { Col, Row } from "antd"
import Layout from "antd/lib/layout/layout"
import React, { Fragment } from 'react'
import VerifyComponent from '../components/VerifyComponent';
import PageLayout from "../layout";


function LandingPage() {
  return (
    <div className='main'>
      <Row>
        <Col>
          <PageLayout>
            <VerifyComponent />
          </PageLayout>
        </Col>
      </Row>
    </div>

  )
}

export default LandingPage
