import React, {  useRef, useState } from 'react'
import { Alert, Col, Row, Spin, Grid } from "antd"
import { Input, Form, SubmitButton } from 'formik-antd';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom';
import ModalComponent from './ModalComponent';
import ReCAPTCHA from 'react-google-recaptcha';
import { submitWithCaptcha } from '../api';


const initialValues = {
  id: ""
}

const validationSchema = Yup.object({
	id: Yup.string()
		.required("This field is required")
		.matches(/^[0-9]+$/, "Must be only digits")
		.min(6, "Wrong ID Format")
		.max(6, "Wrong ID Format")
});

function VerifyComponent() {
  const [loading, setLoading] = useState(false);
  const [showModal, setIsModalVisible] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const {xs} = screens

  const reCaptcha = useRef();

  const history = useHistory()

  const handleOk = () => {
		setIsModalVisible(false);
	};
	const handleCancel = () => {
		setIsModalVisible(false);
	};


  const onSubmit = (values) => {
    setLoading(true)

    if (!token) {
			setLoading(false);
			setError("You must verify captcha");
			return;
		}

    if (values.id !== '491342') {
			const timeout = setTimeout(() => {
				setLoading(false);
				setIsModalVisible(true);
				return () => clearTimeout(timeout);
			}, 3000);
			return;
		}

		submitWithCaptcha(token)
			.then((res) => {
				// reCaptcha.current.reset();
				setLoading(false);
				setToken("");
				history.push("/netcentric/public/jerome-gacoscosim");
			})
			.catch(({ res }) => {
				setLoading(false);
				setError(res);
			});
  }


if (loading) return (
    <Row style={{height: '90vh', width: '100vw'}}
      justify='center' align='middle'
    >
      <Col>
        <Spin tip="Loading..." size="large">
        <Alert
          message="System is processing your request"
          description="Please wait..."
          type="info"
        />
      </Spin>
      </Col>
    </Row>
  ) 
  
  return (
		<div className="content">
			<Row align="middle">
				<Col span={`${xs ? 24 : 18}`} offset={`${!xs ? 3 : ""}`}>
					<p>
						Please enter the employee id from the CERTIFICATE OF EMPLOYMENT. Click
						submit to find the employee information. 
						After viewing the verification information, you may continue to use this form to verify additional employees as needed.
					</p>

					<Formik
						onSubmit={onSubmit}
						validationSchema={validationSchema}
						initialValues={initialValues}>
						{
							<Form>
								<Row>
									<Col xl={12} lg={20} md={24} sm={24} xs={24}>
										<Form.Item name="id" label="Employee ID:" className="mt-2">
											<Input className="input-id" name="id" placeholder="Enter employee ID" />
										</Form.Item>
									</Col>
								</Row>
								<Row>
									<Col></Col>
								</Row>
								<Row>
									<Col span={`${xs ? 24 : 18}`} offset={`${!xs ? 2 : ""}`}>
										<Row>
											<Col>
												<ReCAPTCHA
													className="mt-1"
													ref={reCaptcha}
													sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
													onChange={(token) => setToken(token)}
													onExpired={(e) => setToken("")}
												/>
												<span className="error-recaptcha">{error}</span>
											</Col>
										</Row>
										<SubmitButton className="mt-3" type="primary" shape="round" size="large">
											Submit
										</SubmitButton>
									</Col>
								</Row>
							</Form>
						}
					</Formik>
					<ModalComponent show={showModal} onCancel={handleCancel} onOk={handleOk} />
				</Col>
			</Row>
		</div>
	);
}


export default VerifyComponent
