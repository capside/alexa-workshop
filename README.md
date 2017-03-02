# Voice assistants

## Alexa registration

* [alexa.amazon.com]
* [echosim.io] and select EN-GB
* [https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide](Documentation)

## Glosary

* Custom skill
* Intent (actions schema)
* Slots
* Utterances
* Function or web service
* Configuration
* Card

## Permission configuration

* Download and install [AWS Cli](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
* Create a IAM user for serverless  and download AK/SC
	* AWSLambdaFullAccess
	* IAMFullAccess
	* AmazonS3FullAccess
	* AmazonAPIGatewayAdministrator
	* CloudformationFullAccess
* Set up credentials: ```aws configure```

## Skill development

* Download and install [Serverless](https://serverless.com/framework/docs/providers/aws/guide/installation/)
	* Install NodeJs
	* Run `npm install -g serverless`
	* Check it with `sls --version`
	
* Create a new project with `serverless create --template aws-nodejs --path motivator`
* Configure the serverless.yml file
```
service: motivator

provider:
  name: aws
  runtime: nodejs4.3
  region: eu-west-1

functions:
  motivator:
    handler: handler.motivator
    events:
      - alexaSkill
```
* Deploy with ```sls deploy```	

## Configure skill

* [Skills Kit](https://developer.amazon.com/edw/home.html#/skills/list)
* Press *Add a New Skill*
* Skill information
	* English UK as language
	* Motivator as name
	* "Alexa, ask motivator" as invocation
* Interaction model
	* Be sure to us UK English
	* Set intent
``` json
		{
		  "intents": [
			{
			  "intent": "motivator",
			  "slots": [
				{
				  "name": "target",
				  "type": "CIBERADO_NAMES"
				}
			  ]
			}
		  ]
		}
```
	* Press *Add Slot Type*
	* Set "CIBERADO_NAMES" as slot name and "Emma, Pau, Jesus, Javi, Me, Myself" as values (one on each line)
	* Add next utterances:
``` json
motivator energize myself
motivator energize me
motivator give me energy
motivator motivate me
motivator motivate {target}
```

* Endpoint
	* Set Lambda to what ```sls info --verbose``` reflects (without version number)
* Complete the rest of the configuration


