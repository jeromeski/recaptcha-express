import { Col, Row, Button } from 'antd';
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import PageLayout from "../layout"

function ErrorPage() {
  return (
		<Fragment>
			<PageLayout>
				<div className="error-page">
					<Row justify='center'>
						<Col>
							<h1>There is no such id in the database</h1>
							<Button type="secondary" className="back-button">
								<Link to="/netcentric/public/verification">Back</Link>
							</Button>
						</Col>
					</Row>
				</div>
			</PageLayout>
		</Fragment>
	);
}

export default ErrorPage
