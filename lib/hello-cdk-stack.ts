import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3 } from 'aws-cdk-lib';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // This creates the template that makes my bucket
    const bucket = new s3.Bucket(this, 'HelloWorldCDKFuntime');
  }
}
