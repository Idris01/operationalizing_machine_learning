[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=svg)](https://circleci.com/gh/circleci/circleci-docs)

# Operationalizing Machine Learning Microservice API.

In this project A Pre-Trained Machine Learning Model is Operationalized Using [kubernetes](https://kubernetes.io/),
an open-source system for automating the management of containerized applications. The Machine Learning model
has been trained to predict housing prices in Boston according to several features, such as average rooms in 
a home and data about highway access, teacher-to-pupil ratios, and so on. You can read more about the data, 
which was initially taken from Kaggle, on [the data source site](https://www.kaggle.com/c/boston-housing). 
The backend application is the propular Python Flask Framework that serves out predictions (inference) about housing prices through API calls. 

## Documentation
The Application has been packaged into docker image named [idris01/devop_app](https://hub.docker.com/repository/docker/idris01/devop_app)

### Setup the Environment

* Create a virtualenv with Python 3.7 and activate it. Refer to this link for help on specifying the Python version in the virtualenv. 
```bash
python3 -m pip install --user virtualenv
# You should have Python 3.7 available in your host. 
# Check the Python path using `which python3`
# Use a command similar to this one:
python3 -m virtualenv --python=<path-to-Python3.7> .devops
source .devops/bin/activate
```
* Run `make install` to install the necessary dependencies

### Running `application`

1. As A Standalone Application:  `python app.py`


2. Run in Docker with the bash script  `./run_docker.sh` or follow instruction below

`docker run -p 8000:80 idris01/devop_app`

The above command binds the hosts port `8000` to the container's `80`

3. Run in Kubernetes the added bash script   `./run_kubernetes.sh` or optionaly follow instruction below.

First Deploy the app
`kubectl create deploy <pod-name> --image=idris01/devop_app`

Then forward the container port to the host

`kubectl port-forward <pod-name> --address 0.0.0.0 8000:80`

### Make Prediction

Run the `./make_prediction.sh` and you can also read through the [make_prediction](./make_prediction.sh).