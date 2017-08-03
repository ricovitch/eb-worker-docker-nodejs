# eb-worker-docker-nodejs
Elastic Beanstalk worker tiers with docker sample for NodeJS

Inspired from
* https://github.com/imaifactory/eb-worker-sample
* https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

# installation
1. Create an Elastic Beanstalk application with
* worker tiers model : http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features-managing-env-tiers.html
* single container docker type : http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/docker-singlecontainer-deploy.html

2. Upload the content of this projet as an application version
3. Deploy to your environment
4. Send some messages to the SQS queue associated with your worker application
5. Get the logs to see the results

# notes

If you activate cloudwatch log uploads, you will see all logs in cloudwatch, including eb, docker, and the nodejs server logs.