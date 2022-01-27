# African Cities Lab frontend developer test

Test for frontend developer candidates at the African Cities Lab

##Frontend Requirements
* Install [Node](https://nodejs.org/en/download/)

##Setup Frontend
* Go to react folder `cd frontend-reactjs`
* Install dependecies `npm install`
* Start frontend `npm start`

## Images
[1](https://github.com/nabilraimi/acl-frontend-test/blob/main/frontend-reactjs/public/Capture%20d%E2%80%99e%CC%81cran%202022-01-27%20a%CC%80%206.18.34%20PM.png)
[2](https://github.com/nabilraimi/acl-frontend-test/blob/main/frontend-reactjs/public/Capture%20d%E2%80%99e%CC%81cran%202022-01-27%20a%CC%80%206.14.46%20PM.png)
[3](https://github.com/nabilraimi/acl-frontend-test/blob/main/frontend-reactjs/public/Capture%20d%E2%80%99e%CC%81cran%202022-01-27%20a%CC%80%206.14.30%20PM.png)


## Assignment description

This repository contains an example of a REST API for a course catalog, which is deployed to [acl-frontend-test.sensecity-africa.io/api](https://acl-frontend-test.sensecity-africa.io/api). The objective of the assignment is to create the frontend for the course catalog at the [acl-frontend-test.sensecity-africa.io/api/courses](https://acl-frontend-test.sensecity-africa.io/api/courses) endpoint. You can use any framework to accomplish that, i.e., django templates (e.g., with Bootstrap, Foundation, or similar), React, Angular, Vue.js and the like.

### Evaluation criteria

Two views are required:

* the detail view of each course, and
* the course list view. Note that you can filter courses by category as in  `api/courses/?categories=<category>`, where `<category>` is the desired category.

We will value the quality of both the visual design and the underlying code.

### Submission instructions

1. Fork the [African-Cities-Lab/acl-frontend-test](https://github.com/African-Cities-Lab/acl-frontend-test) repository.
2. Add, commit and push your changes to your local fork. Note that there are [pre-commit](https://pre-commit.com/) hooks activated for this repository, which will format and lint the code. To activate them in your local copy, install pre-commit in your computer and activate it by running `pre-commit install` from the root of the repository.
3. Submit a pull request to the `main` branch of [African-Cities-Lab/acl-frontend-test](https://github.com/African-Cities-Lab/acl-frontend-test). **Note that the continuous-integration tests that will be run with GitHub Actions must pass**.

### Instructions for local development

This setup is based on the [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django) template. Accordingly, there are two main ways to develop locally, i.e., [using a virtual environment](https://cookiecutter-django.readthedocs.io/en/latest/developing-locally.html) or [using docker](https://cookiecutter-django.readthedocs.io/en/latest/developing-locally-docker.html). We recommend the latter, but feel free to use another approach.

Once the local development environment is set up, you can test the API locally as in:

```console
docker-compose -f local.yml run --rm django python manage.py migrate
docker-compose -f local.yml run --rm django python manage.py generate_test_courses 10
```

if you are using docker, or

```console
python manage.py migrate
python manage.py generate_test_courses 10
```

otherwise. Then, a local REST API will be available at `localhost:8000/api/`, with the course catalog endpoint at `localhost:8000/api/courses/`.

## Acknowledgements

License: GPLv3

The generation of test data is strongly based on [a post by Matthew Segal](https://mattsegal.dev/django-factoryboy-dummy-data.html).

[![Built with Cookiecutter Django](https://img.shields.io/badge/built%20with-Cookiecutter%20Django-ff69b4.svg?logo=cookiecutter)](https://github.com/cookiecutter/cookiecutter-django/)
[![Black code style](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)
