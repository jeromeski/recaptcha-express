import { Grid, Button, Card, Col, Row } from "antd"
import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';
import { Table } from "antd";

const dataSource = [
	{
		key: "1",
    company: "Netcentric Inc",
    id: '491342',
		name: "Gacoscosim, Jerome M.",
		startDate: "03/07/18",
    endDate: "07/31/19",
    status: "Resigned",
    remarks: "Cleared"
	}

];

const columns = [
	{
		title: "Company",
		dataIndex: "company",
		key: "company"
	},
	{
		title: "Employee ID",
		dataIndex: "id",
		key: "id",
		responsive: ["md"]
	},
	{
		title: "Name",
		dataIndex: "name",
		key: "name"
	},
	{
		title: "Start Date",
		dataIndex: "startDate",
		key: "startDate",
		responsive: ["md"]
	},
	{
		title: "End Date",
		dataIndex: "endDate",
		key: "endDate",
		responsive: ["md"]
	},
	{
		title: "Status",
		dataIndex: "status",
		key: "status"
	},
	{
		title: "Remarks",
		dataIndex: "remarks",
		key: "remarks",
		responsive: ["md"]
	}
];

function ResultPage() {
  
  return (
		<Fragment>
			<Row span={24} justify="center">
				<Col>
					<Row justify="center" style={{ textAlign: "center", marginTop: "10rem" }}>
						<Col>
							<h1 className="employee">Jerome Gacoscosim</h1>
							<h3 className="position">Junior React Developer</h3>
						</Col>
					</Row>
					<Card bordered={true}>
						<Row justify="center">
							<Col>
								<Table dataSource={dataSource} columns={columns} bordered={true} />
							</Col>
						</Row>
					</Card>

                <Button 
                  className="back-btn" 
                  type="primary" 
                  shape="round" 
                  size="large"
                  >
                    <Link to="/netcentric/public/verification">Back</Link>
                </Button>
				</Col>
			</Row>
		</Fragment>
	);
}

export default ResultPage

