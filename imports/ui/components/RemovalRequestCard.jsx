import React from 'react';

import { Card, CardImg, CardBody, CardTitle, CardText, CardFooter, Button } from 'reactstrap';

export default class RemovalRequestCard extends React.Component {


  constructor(props) {
    super(props);

    this.approve = this.approve.bind(this);
    this.deny = this.deny.bind(this);
  }


  approve() {
    let requestId = this.props.removal.requestId;
    let businessId = this.props.removal.businessId;

    Meteor.call('businesses.remove', {
      id: businessId,
    });

    Meteor.call('removalRequests.remove', {
      id: requestId,
    });
  }

  deny() {
    let requestId = this.props.removal.requestId;

    Meteor.call('removalRequests.remove', {
      id: requestId,
    });
  }

  render() {
    return (
      <div className="col-md-4 d-flex align-items-stretch mb-3">
        <Card className="bg-light shadow">
          <CardBody>
            <CardTitle>{this.props.removal.name}</CardTitle>
            <hr className="mt-0"/>
            <CardText className="mb-0">Submitter: {this.props.removal.submitterName}</CardText>
            <CardText className="mb-0">Email: {this.props.removal.email}</CardText>
            <CardText className="mb-0">Phone #: {this.props.removal.phoneNumber}</CardText>
            <CardText className="mb-0">Grad year: {this.props.removal.gradYear}</CardText>
            <CardText className="mb-0">Reason for Request: {this.props.removal.reason}</CardText>
          </CardBody>
          <CardFooter className="bg-primary text-white">
            <Button color="primary" className="mr-1" onClick = { this.approve.bind(this) } >
              <i className="fas fa-check-circle" aria-hidden="true"/>
            </Button>
            <Button color="primary" onClick = { this.deny.bind(this) } >
              <i className="fas fa-times-circle" aria-hidden="true"/>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

}
