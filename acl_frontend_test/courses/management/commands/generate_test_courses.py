import random

from django.core.management.base import BaseCommand
from django.db import transaction
from faker import Faker

from acl_frontend_test.courses.factories import (
    CourseFactory,
    InstructorFactory,
    OrganizationFactory,
)
from acl_frontend_test.courses.models import Course, Instructor, Organization

MIN_CATEGORIES_PER_COURSE = 2
MAX_CATEGORIES_PER_COURSE = 5

MIN_INSTRUCTORS_PER_COURSE = 1
MAX_INSTRUCTORS_PER_COURSE = 3


class Command(BaseCommand):
    help = "Generates test courses"

    def add_arguments(self, parser):
        parser.add_argument(
            "num_courses", type=int, help="Number of courses to be created"
        )

    @transaction.atomic
    def handle(self, *args, **kwargs):
        num_courses = kwargs["num_courses"]
        self.stdout.write("Deleting old data...")
        models = [Instructor, Organization, Course]
        for model in models:
            model.objects.all().delete()

        self.stdout.write("Creating test courses...")

        # create the categories
        fake = Faker()
        categories = [
            fake.word() for _ in range(num_courses * MIN_CATEGORIES_PER_COURSE)
        ]

        # create the organizations
        # first we need to know the number of instructors so we generate at most as many organizations
        num_instructors = num_courses * MIN_INSTRUCTORS_PER_COURSE
        organizations = []
        for _ in range(random.choice(range(num_instructors))):
            organization = OrganizationFactory()
            organizations.append(organization)

        # now create the instructors
        instructors = []
        for _ in range(num_instructors):
            instructor = InstructorFactory(organization=random.choice(organizations))
            instructors.append(instructor)

        # finally, create the courses
        # helper function to DRY
        def _get_submodel_sample(submodels, min_submodels, max_submodels):
            return random.choices(
                submodels, k=random.choice(range(min_submodels, max_submodels))
            )

        for _ in range(num_courses):
            CourseFactory(
                categories=_get_submodel_sample(
                    categories, MIN_CATEGORIES_PER_COURSE, MAX_CATEGORIES_PER_COURSE
                ),
                instructors=_get_submodel_sample(
                    instructors, MIN_INSTRUCTORS_PER_COURSE, MAX_INSTRUCTORS_PER_COURSE
                ),
            )
        self.stdout.write(f"Successfully created {num_courses} test courses")
