import re

import factory
from factory.django import DjangoModelFactory, ImageField

from acl_frontend_test.courses import models


class OrganizationFactory(DjangoModelFactory):
    class Meta:
        model = models.Organization

    name = factory.Faker("company")
    acronym = factory.LazyAttribute(
        lambda org: "".join([word[0].upper() for word in re.split("\W+", org.name)])
    )
    image = ImageField(color="green")


class InstructorFactory(DjangoModelFactory):
    class Meta:
        model = models.Instructor

    name = factory.Faker("name")
    bio = factory.Faker("text", max_nb_chars=models.INSTRUCTOR_BIO_MAX_LENGTH)
    profile_picture = ImageField(color="blue")


class CourseFactory(DjangoModelFactory):
    class Meta:
        model = models.Course

    title = factory.Faker("catch_phrase")
    short_description = factory.Faker(
        "text", max_nb_chars=models.COURSE_SHORT_DESCRIPTION_MAX_LENGTH
    )
    full_description = factory.Faker(
        "text", max_nb_chars=models.COURSE_FULL_DESCRIPTION_MAX_LENGTH
    )
    image = ImageField(color="red")

    @factory.post_generation
    def categories(self, create, extracted, **kwargs):
        if not create:
            return

        if extracted:
            self.categories.add(*extracted)

    @factory.post_generation
    def instructors(self, create, extracted, **kwargs):
        if not create:
            return

        if extracted:
            self.instructors.add(*extracted)
